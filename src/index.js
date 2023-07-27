document.addEventListener('DOMContentLoaded', function() {
    const terminalOutput = document.getElementById('terminal-output');
    const terminalInput = document.getElementById('terminal-input');
  
    terminalInput.addEventListener('keydown', function(event) {
      if (event.key === 'Enter') {
        event.preventDefault();
        handleCommand(terminalInput.value);
        terminalInput.value = "";
      }
    });

    (function() {
        // 这里放置您想要执行的代码
        addToTerminal(">> Welcome to Levy's Terminal");
      })();
    
        // 确保输入框一直获取焦点
    setInterval(function() {
        if (document.activeElement !== terminalInput) {
            terminalInput.focus();
        }
    }, 100);
  
    function handleCommand(command) {
      addToTerminal('\n>> ' + command + ":");
      const output = processCommand(command);
      if (Array.isArray(output)){
        output.forEach(line => addToTerminal("   " + line));
      }else if(typeof output === 'string'){
        addToTerminal("   " + output);
      }

    }
  
    function processCommand(command) {
      const args = command.trim().split(' ');
      const cmd = args.shift().toLowerCase();
  
      // 基本示例命令：echo 和 help
      switch (cmd) {
        case 'echo':
          return args.join(' ');
        case 'help':
          return [
            'Available commands:',
            'echo <text> - Print the text to the terminal',
            'help - Show this help message'
          ];
        case 'clear':
            return cmdClear();
        case 'name':
            return 'Levy Zhang';
        default:
          return 'Command not found. Type "help" to see available commands.';
      }
    }
  
    function addToTerminal(text) {
      const lines = text.split('\n');
      lines.forEach(line => {
        terminalOutput.textContent += line + '\n';
      });
      terminalOutput.scrollTop = terminalOutput.scrollHeight;
    }

    function cmdClear(){
        terminalOutput.textContent = ">> Clear Over! Please type.";
    }
  });
  