document.addEventListener('DOMContentLoaded', function() {
    const terminalOutput = document.getElementById('terminal-output');
    const terminalInput = document.getElementById('terminal-input');

    let displayInterval = 10;

    terminalInput.addEventListener('keydown', function(event) {
      if (event.key === 'Enter') {
        event.preventDefault();
        handleCommandTest(terminalInput.value);
        terminalInput.value = "";
      }
    });

    (function() {
        // 这里放置您想要执行的代码
        addToTerminal(">> Welcome to Levy's Terminal");
        printTextOneByOne(terminalOutput, displayInterval ,2);
      })();
    
        // 确保输入框一直获取焦点
    setInterval(function() {
        if (document.activeElement !== terminalInput) {
            terminalInput.focus();
        }
    }, 100);
  
    function handleCommand(command) {
      //addToTerminal('\n>> ' + command + ":");
      const output = processCommand(command);
      if (Array.isArray(output)){
        //const line = output[0];
        for(let i = 0; i < output.length; i++){
          //line = output[i];
          if(i === 0){
            terminalOutput.textContent += '>> ' + output[i] + '\n';
          }else{
            terminalOutput.textContent += '   ' + output[i] + '\n';
          }
        }
        //output.forEach(line => addToTerminal(line));
      }else if(typeof output === 'string'){
        addToTerminal('>> ' + output);
      }

    }

    function handleCommandTest(command){
      const newPre = document.createElement('div');
      newPre.classList.add('terminal-output');
      const output = processCommand(command);
      //console.log(output);

      if (Array.isArray(output)){
        //const line = output[0];
        for(let i = 0; i < output.length; i++){
          //line = output[i];
          if(i === 0){
            newPre.textContent += '>> ' + output[i] + '\n';
          }else{
            newPre.textContent += '   ' + output[i] + '\n';
          }
        }
        //output.forEach(line => addToTerminal(line));
      }else if(typeof output === 'string'){
        newPre.textContent += '>> ' + output + '\n';
      }

      //terminalOutput.insertBefore(newPre, terminalOutput.nextSibling);
      terminalOutput.appendChild(newPre);
      printTextOneByOne(newPre, displayInterval, 2);
    }
  
    function processCommand(command) {
      //terminalOutput.textContent += '>>';
      const cmdt = command.trim().split(' ');
      const args = command.trim().split(' ');
      const cmd = args.shift().toLowerCase();
  
      // 基本示例命令：echo 和 help
      switch (cmd) {
        case 'echo':
          return args.join(' ');
        case 'help':
          return [
            'Available commands:',
            '[about] [clear] [contact] [help] [interests] [languages] [portfolio] [setting] [skills] [shutdown]',
            
          ];
        case 'clear':
            return cmdClear();
        case 'about':
            return 'My name is Levy Zhang, and I am a game developer and studying Robotics in QMUL.';
        case 'contact':
            return 'dodio12138@gmail.com'
        case 'interests':
            return [
              '- Passionate about open source projects, developing some gadgets on my GitHub page, and writing technical documentation.',
              '- Pixel art, graphic/3D design and animation enthusiast, now focusing on AI generated art.',
              '- Enjoys game development, participated in several GameJams and posted them on my Itch page. Also a gamer.'
            ]
        case 'languages':
            return [
              'English  - CEFR B2',
              'Mandarin - Native'
            ]
        case 'setting':
            return setting(cmdt);
        case 'skills':
            return [
              '/Programming/   - Python (OpenCV, Matplotlib, Requests, Scrapy, PyTorch. etc.), C#, C/C++, HTML/CSS, JavaScript.',
              '/Softwave/      - Matlab, Creo, Solidworks, Unity3D, Auto CAD, Keil, Altium Designer.',
              '/Hardware/      - MCU (8051, STM32), Raspberry Pi, Arduino, PLC (Siemens, Mitsubishi), CNC, 3D Printing.',
              '/Miscellaneous/ - Linux, Shell (Bash), LATEX(Overleaf), Markdown, Git, Microsoft Office, Blender, AfterEffect, Premiere, DaVinci, Photoshop, Illustrator, QGIS.',
              '/Soft Skills/   - Time Management, Teamwork, Problem-solving, Documentation'
            ]
        case 'portfolio':
            return 'https://dodio12138.github.io'
        case 'love':
            return[
              '┌┈┈┈┈┈┈┈┈┈┈┈┐',
              '│  __   __  │',
              '│ /  ╲_/  ╲ │',
              '│ ╲       / │',
              '│  ╲     /  │',
              '│   ╲   /   │',
              '│    ╲_/    │',
              '└┈┈┈┈┈┈┈┈┈┈┈┘'
            ]
          case 'shutdown':
              return shutDown();
        default:
          return 'Command not found. Type "help" to see available commands.';
      }
    }
  
    function addToTerminal(text) {
      const lines = text.split('\n');
       lines.forEach(line => {
         if(line)
         terminalOutput.textContent += line + '\n';
      });
    // for (let i = 0; i < lines.length; i++) {
    //   const line = lines[i];
    //   if(i === 0){
    //     terminalOutput.textContent += '>> ' + line + '\n';
    //     console.log('1');
    //   }else{
    //     terminalOutput.textContent += '  ' + line + '\n';
    //   }
    // }
      terminalOutput.scrollTop = terminalOutput.scrollHeight;
    }

    function cmdClear(){
        while (terminalOutput.firstChild) {
          terminalOutput.removeChild(terminalOutput.firstChild);
        }
        terminalOutput.textContent = '>> Clear Over! Type "help" to see available commands.' + '\n';
        printTextOneByOne(terminalOutput, 10 ,2);
    }

    function updateTime() {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      const currentTime = `${hours}:${minutes}:${seconds}`;

      document.getElementById('clock').textContent = 'TIME: ' + currentTime;
    }

    function printTextOneByOne(element, interval, indexOffset) {
      const text = element.innerText;
      element.innerText = '';
      let index = indexOffset;
      for(let i = 0;i<indexOffset;i++){
        element.innerText += text.charAt(i);
      };

      const timer = setInterval(() => {
          if (index < text.length) {
              element.innerText += text.charAt(index);
              index++;
          } else {
              clearInterval(timer);
          }
      }, interval);
  }

  function getLastLineText(element){
    const linesArray = element.split('\n');
    const lastLine = linesArray[linesArray.length - 1];
    return lastLine;
  }

  function setting(cmd){
    console.log(cmd);
    if(cmd.length==1){
      return [
        'The format of this command: setting [Subcommand]',
        '',
        'Subcomand:',
        '   interval - Modify the time interval for scrolling characters on the display.'
      ]
    }else if((cmd[1] == 'interval')&&(Number(cmd[2])!='NaN')&&(cmd.length==3)){
      displayInterval = cmd[2];
      return 'Interval modified.'
    }else {
      return 'Please type in the correct command format, or type setting for help.';
    };
  }

  function shutDown() {
    // 使用 setTimeout 设置1秒的等待时间
    while (terminalOutput.firstChild) {
      terminalOutput.removeChild(terminalOutput.firstChild);
    }
    terminalOutput.textContent = '>> Shutting down......' + '\n';
    printTextOneByOne(terminalOutput, 20 ,2);
    setTimeout(function() {
      window.close(); // 在定时器回调函数中执行关闭操作
    }, 2000); // 1000毫秒即为1秒
  }

    setInterval(updateTime, 1000); // 每隔一秒钟调用 updateTime 函数

  });
  