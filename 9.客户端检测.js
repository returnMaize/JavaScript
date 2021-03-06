能力检测 {
  浏览器供应商虽然实现公共接口方面提供了很多精力 但结果仍然是每一种浏览器都有各自的长处 也都有各自的缺点 即使是那些跨平台的浏览器 虽然从技术上看版本相同 也照样存在不一致性问题 面对普遍存在的不一致问题 开发人员要么采取迁就各方面的最小公分母策略 要么（也是更常见的）就得利用各种客户端检测方法 来突破或规避种种局限性
  迄今为止 客户端检测仍然是web开发领域中一个饱受争议的话题 一谈到这个话题 人们总会不约而同的提到浏览器应该支持一组最常用的公共功能 在理想状态下 确实应该如此 在现实当中 浏览器之前的差异以及不同浏览器的怪癖 多得简直不胜枚举 因此 客户端检测除了是一种补救措施之外 更是一种行之有效的开发策略
  检测web客户端的手段很多 而且各有利弊 但最重要的还是要知道 不到万不得已 就不要使用客户检测 只要能找到更通用的方法 就应该优先采用更通用的方法 一言以蔽之 先设计最通用的方案 然后再使用特定于浏览器的技术增强该方案
}

主要为了IE pass