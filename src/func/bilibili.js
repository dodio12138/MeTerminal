/*
 * @Author: dodio12138 1159715241@qq.com
 * @Date: 2023-08-17 02:43:56
 * @LastEditors: dodio12138 1159715241@qq.com
 * @LastEditTime: 2023-08-17 03:14:43
 * @FilePath: \MeTerminal\src\func\bilibili.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const axios = require('axios');

class BilibiliAPI {
  static async getFansCount(userId) {
    try {
      const response = await axios.get(`https://api.bilibili.com/x/relation/stat?vmid=${userId}`);
      return response.data.data.follower;
    } catch (error) {
      console.error('Error fetching fans count:', error);
      throw new Error('Failed to fetch fans count');
    }
  }
}

module.exports = BilibiliAPI;
