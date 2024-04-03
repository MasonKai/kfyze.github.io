"use strict";(self.webpackChunklearn_data=self.webpackChunklearn_data||[]).push([[7541],{3671:(n,s)=>{s.A=(n,s)=>{const a=n.__vccOpts||n;for(const[n,t]of s)a[n]=t;return a}},5490:(n,s,a)=>{a.r(s),a.d(s,{comp:()=>J,data:()=>z});var t=a(7847);const e=(0,t.Fv)('<p>HTTPS 网页中，js、css、gif 等文件都必须要使用 https，否则会加载报错，图片可以不使用 https。</p><h2 id="基础知识" tabindex="-1"><a class="header-anchor" href="#基础知识"><span>基础知识</span></a></h2><h3 id="相对路径" tabindex="-1"><a class="header-anchor" href="#相对路径"><span>相对路径</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token operator">/</span> 根目录（electron 不适用）\n<span class="token punctuation">.</span><span class="token operator">/</span> 当前目录（可省略不写）\n<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token operator">/</span> 父级目录（返回到上一级目录）\n<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token operator">/</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token operator">/</span> 祖父级目录（返回两级目录）\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="反义、转义字符" tabindex="-1"><a class="header-anchor" href="#反义、转义字符"><span>反义、转义字符</span></a></h3><p>一些字符在 HTML 中拥有特殊的含义，如果我们希望浏览器正确地显示这些字符，我们必须在 HTML 源码中插入字符实体。</p><table><thead><tr><th>显示结果</th><th>描述</th><th>实体名称</th><th>实体编号</th></tr></thead><tbody><tr><td></td><td>空格</td><td>&amp;nbsp;</td><td>&amp;#160;</td></tr><tr><td>&lt;</td><td>小于号</td><td>&amp;lt;</td><td>&amp;#60;</td></tr><tr><td>&gt;</td><td>大于号</td><td>&amp;gt;</td><td>&amp;#62;</td></tr><tr><td>&amp;</td><td>和号</td><td>&amp;amp;</td><td>&amp;#38;</td></tr><tr><td>&quot;</td><td>引号</td><td>&amp;quot;</td><td>&amp;#34;</td></tr><tr><td>&#39;</td><td>撇号</td><td>&amp;apos;</td><td>&amp;#39;</td></tr></tbody></table><h2 id="javascript-插件" tabindex="-1"><a class="header-anchor" href="#javascript-插件"><span>JavaScript 插件</span></a></h2>',8),p={href:"https://fontawesome.com/",target:"_blank",rel:"noopener noreferrer"},o={href:"https://layuion.com/",target:"_blank",rel:"noopener noreferrer"},l={href:"https://github.com/CodeSeven/toastr",target:"_blank",rel:"noopener noreferrer"},c={href:"https://popper.js.org/",target:"_blank",rel:"noopener noreferrer"},i={href:"https://dayjs.gitee.io/docs/zh-CN/get-set/get-set",target:"_blank",rel:"noopener noreferrer"},r={href:"https://github.com/javve/list.js",target:"_blank",rel:"noopener noreferrer"},u={href:"https://github.com/saucxs/watermark-dom",target:"_blank",rel:"noopener noreferrer"},k={href:"https://codemirror.net/",target:"_blank",rel:"noopener noreferrer"},d=(0,t.Lk)("sup",{class:"footnote-ref"},[(0,t.Lk)("a",{href:"#footnote1"},"[1]"),(0,t.Lk)("a",{class:"footnote-anchor",id:"footnote-ref1"})],-1),m=(0,t.Lk)("h3",{id:"功能加强",tabindex:"-1"},[(0,t.Lk)("a",{class:"header-anchor",href:"#功能加强"},[(0,t.Lk)("span",null,"功能加强")])],-1),v={href:"https://clipboardjs.com/",target:"_blank",rel:"noopener noreferrer"},g={href:"https://github.com/eligrey/FileSaver.js",target:"_blank",rel:"noopener noreferrer"},h={href:"https://github.com/pqina/filepond",target:"_blank",rel:"noopener noreferrer"},b={href:"https://github.com/oct16/TimeCat",target:"_blank",rel:"noopener noreferrer"},f=(0,t.Lk)("h3",{id:"小游戏代码",tabindex:"-1"},[(0,t.Lk)("a",{class:"header-anchor",href:"#小游戏代码"},[(0,t.Lk)("span",null,"小游戏代码")])],-1),q={href:"https://github.com/muan/emoji-minesweeper",target:"_blank",rel:"noopener noreferrer"},x={href:"https://github.com/KilledByAPixel/HueJumper2k",target:"_blank",rel:"noopener noreferrer"},y={href:"https://github.com/shinima/battle-city",target:"_blank",rel:"noopener noreferrer"},L={href:"https://github.com/chvin/react-tetris",target:"_blank",rel:"noopener noreferrer"},w=(0,t.Lk)("h2",{id:"css-样式",tabindex:"-1"},[(0,t.Lk)("a",{class:"header-anchor",href:"#css-样式"},[(0,t.Lk)("span",null,"CSS 样式")])],-1),W={href:"https://lhammer.cn/You-need-to-know-css/#/zh-cn/",target:"_blank",rel:"noopener noreferrer"},j=(0,t.Fv)('<h3 id="图片" tabindex="-1"><a class="header-anchor" href="#图片"><span>图片</span></a></h3><p>图片增加属性，自动扩展宽高。</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>&lt;https://img.newzone.top/xxx.png&gt;<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span>50%<span class="token punctuation">;</span> <span class="token property">height</span><span class="token punctuation">:</span>50%<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span> <span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>&lt;https://img.newzone.top/xxx.png&gt;<span class="token punctuation">&quot;</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>100<span class="token punctuation">&quot;</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>100<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n\n<span class="token comment">&lt;!-- bootstrap 下自动控制图片大小 --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>&lt;https://img.newzone.top/xxx.png&gt;<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>img-fluid<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>图片链接为空时，去除图片所占区域，并防止出现空边框。</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/css<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">\n  <span class="token selector">img[src=&quot;&quot;],\n  img:not([src])</span> <span class="token punctuation">{</span>\n    <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n    <span class="token property">width</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n    <span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当图床图片无法显示时，尝试屏蔽自己网站的 referrer，在源码中添加：<code>&lt;meta name=&quot;referrer&quot; content=&quot;no-referrer&quot; /&gt;</code>。</p><h3 id="纯色背景" tabindex="-1"><a class="header-anchor" href="#纯色背景"><span>纯色背景</span></a></h3><p>body 铺满页面，添加纯色背景。</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">\n  <span class="token selector">body</span> <span class="token punctuation">{</span>\n    <span class="token property">background-color</span><span class="token punctuation">:</span> #222b3a<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token selector">html,\n  body</span> <span class="token punctuation">{</span>\n    <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或使用 bootstrap 的样式<code>class=&quot;bg-light&quot;</code>。</p><h3 id="鼠标经过变色" tabindex="-1"><a class="header-anchor" href="#鼠标经过变色"><span>鼠标经过变色</span></a></h3><p>鼠标经过重链接，则该区域变色。</p><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">.tg td a:hover</span> <span class="token punctuation">{</span>\n  <span class="token property">background</span><span class="token punctuation">:</span> #f29901<span class="token punctuation">;</span>\n  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="隐藏元素" tabindex="-1"><a class="header-anchor" href="#隐藏元素"><span>隐藏元素</span></a></h3><p>隐藏网页元素</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 将元素的显示设为无，元素在网页中不占任何的位置。</span>\n<span class="token assign-left variable">style</span><span class="token operator">=</span><span class="token string">&quot;display:none;&quot;</span>\n<span class="token comment"># 将元素隐藏，但是元素在网页中的位置还是被占着。</span>\n<span class="token assign-left variable">style</span><span class="token operator">=</span><span class="token string">&quot;visibility:hidden;&quot;</span>\n\n<span class="token comment"># 显示隐藏元素</span>\n<span class="token variable"><span class="token variable">$(</span>&#39;<span class="token comment">#hidden_sort&#39;</span><span class="token variable">)</span></span>.show<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment"># 继续隐藏#hidden_sort</span>\n<span class="token variable"><span class="token variable">$(</span>&#39;<span class="token comment">#hidden_sort&#39;</span><span class="token variable">)</span></span>.hide<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token operator">&lt;</span>div <span class="token assign-left variable">id</span><span class="token operator">=</span><span class="token string">&quot;hidden_alert&quot;</span> <span class="token assign-left variable">style</span><span class="token operator">=</span><span class="token string">&quot;display:none;&quot;</span> <span class="token assign-left variable">class</span><span class="token operator">=</span><span class="token string">&quot;col-12 alert alert-primary&quot;</span> <span class="token assign-left variable">role</span><span class="token operator">=</span><span class="token string">&quot;alert&quot;</span><span class="token operator">&gt;</span>标题数过大<span class="token operator">&lt;</span>/div<span class="token operator">&gt;</span>\n<span class="token comment"># 当无法使用，继续隐藏#hidden_sort</span>\ndocument.getElementById<span class="token punctuation">(</span><span class="token string">&#39;hidden_alert&#39;</span><span class="token punctuation">)</span>.style.display<span class="token operator">=</span><span class="token string">&quot;none&quot;</span><span class="token punctuation">;</span>\ndocument.getElementById<span class="token punctuation">(</span><span class="token string">&#39;hidden_alert&#39;</span><span class="token punctuation">)</span>.style.display<span class="token operator">=</span><span class="token string">&quot;block&quot;</span><span class="token punctuation">;</span>\n\n<span class="token comment"># 显示 div span 的文本内容</span>\n<span class="token assign-left variable">hidden_alert.textContent</span><span class="token operator">=</span><span class="token string">&quot;标题数超过，请减少标题数或取消勾选「避重」&quot;</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="高亮" tabindex="-1"><a class="header-anchor" href="#高亮"><span>高亮</span></a></h3><p>对选择文章进行着色高亮。</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">color</span><span class="token punctuation">:</span> #FF0000<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>xxx<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="页面布局" tabindex="-1"><a class="header-anchor" href="#页面布局"><span>页面布局</span></a></h2><h3 id="自适应布局" tabindex="-1"><a class="header-anchor" href="#自适应布局"><span>自适应布局</span></a></h3>',21),T={href:"https://getbootstrap.com/docs/5.1/utilities/spacing/",target:"_blank",rel:"noopener noreferrer"},_=(0,t.Fv)('<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code># 分别为距离上下左右，\nclass=<span class="token string">&quot;mt-5 mb-5 ms-4 me-4&quot;</span>\n\n# 修改间距\nstyle=<span class="token string">&quot;margin-top:-15px;margin-bottom:-15px&quot;</span>\n\n# 图片自动拉伸宽度\nstyle=<span class="token string">&quot;background-size:contain|cover;width:100%;height:auto;&quot;</span>\n\n# 视频将宽度设置大些，然后让其自动缩放\nwidth=<span class="token string">&quot;2400px&quot;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="客户端自适应" tabindex="-1"><a class="header-anchor" href="#客户端自适应"><span>客户端自适应</span></a></h3><p>判断设备是移动还是 PC，然后显示不同样式内容。</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n  window<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">browserRedirect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token keyword">function</span> <span class="token function">browserRedirect</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">var</span> sUserAgent <span class="token operator">=</span> navigator<span class="token punctuation">.</span>userAgent<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">var</span> bIsIpad <span class="token operator">=</span> sUserAgent<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">ipad</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token string">&quot;ipad&quot;</span><span class="token punctuation">;</span>\n    <span class="token keyword">var</span> bIsIphoneOs <span class="token operator">=</span> sUserAgent<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">iphone os</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token string">&quot;iphone os&quot;</span><span class="token punctuation">;</span>\n    <span class="token keyword">var</span> bIsMidp <span class="token operator">=</span> sUserAgent<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">midp</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token string">&quot;midp&quot;</span><span class="token punctuation">;</span>\n    <span class="token keyword">var</span> bIsUc7 <span class="token operator">=</span> sUserAgent<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">rv:1.2.3.4</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token string">&quot;rv:1.2.3.4&quot;</span><span class="token punctuation">;</span>\n    <span class="token keyword">var</span> bIsUc <span class="token operator">=</span> sUserAgent<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">ucweb</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token string">&quot;ucweb&quot;</span><span class="token punctuation">;</span>\n    <span class="token keyword">var</span> bIsAndroid <span class="token operator">=</span> sUserAgent<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">android</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token string">&quot;android&quot;</span><span class="token punctuation">;</span>\n    <span class="token keyword">var</span> bIsCE <span class="token operator">=</span> sUserAgent<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">windows ce</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token string">&quot;windows ce&quot;</span><span class="token punctuation">;</span>\n    <span class="token keyword">var</span> bIsWM <span class="token operator">=</span> sUserAgent<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">windows mobile</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token string">&quot;windows mobile&quot;</span><span class="token punctuation">;</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>\n      bIsIpad <span class="token operator">||</span>\n      bIsIphoneOs <span class="token operator">||</span>\n      bIsMidp <span class="token operator">||</span>\n      bIsUc7 <span class="token operator">||</span>\n      bIsUc <span class="token operator">||</span>\n      bIsAndroid <span class="token operator">||</span>\n      bIsCE <span class="token operator">||</span>\n      bIsWM\n    <span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token comment">//移动端页面</span>\n      <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;#mobile&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;#pc&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hide</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n      <span class="token comment">//pc 端页面</span>\n      <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;#mobile&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hide</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;#pc&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>pc<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span>\n    <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>../upload/202108/1629972325344278.png<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">data-width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1920<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">data-height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1080<span class="token punctuation">&quot;</span></span>\n  <span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mobile<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">text-align</span><span class="token punctuation">:</span>center<span class="token punctuation">;</span><span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span>\n    <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://iluminage-cdn.oss-cn-shanghai.aliyuncs.com/upload/202108/1628149761.png<span class="token punctuation">&quot;</span></span>\n  <span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="本地压缩-html" tabindex="-1"><a class="header-anchor" href="#本地压缩-html"><span>本地压缩 HTML</span></a></h3>',5),F={href:"https://github.com/kangax/html-minifier",target:"_blank",rel:"noopener noreferrer"},S=(0,t.Fv)('<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 全局安装 html-minifier</span>\n<span class="token function">npm</span> <span class="token function">install</span> html-minifier <span class="token parameter variable">-g</span>\n<span class="token comment"># 终端中执行压缩命令，默认压缩 input 下所有文件，压缩选项参照 http://kangax.github.io/html-minifier/</span>\nhtml-minifier --collapse-boolean-attributes --collapse-whitespace --decode-entities --no-html5 --minify-css <span class="token boolean">true</span> --minify-js <span class="token boolean">true</span> --process-conditional-comments --process-scripts text/html --remove-attribute-quotes --remove-comments --remove-empty-attributes --remove-optional-tags --remove-redundant-attributes --remove-script-type-attributes --remove-style-link-type-attributes --remove-tag-whitespace --sort-attributes --sort-class-name --trim-custom-fragments --use-short-doctype --input-dir D:<span class="token punctuation">\\</span>Backup<span class="token punctuation">\\</span>raw --output-dir D:<span class="token punctuation">\\</span>Backup<span class="token punctuation">\\</span><span class="token number">1</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr class="footnotes-sep">',2),H={class:"footnotes"},M={class:"footnotes-list"},I={id:"footnote1",class:"footnote-item"},C={href:"https://www.cnblogs.com/zhnaglei/p/6697638.html",target:"_blank",rel:"noopener noreferrer"},A=(0,t.Lk)("a",{href:"#footnote-ref1",class:"footnote-backref"},"↩︎",-1),U={},J=(0,a(3671).A)(U,[["render",function(n,s){const a=(0,t.g2)("ExternalLinkIcon");return(0,t.uX)(),(0,t.CE)("div",null,[e,(0,t.Lk)("ul",null,[(0,t.Lk)("li",null,[(0,t.Lk)("a",p,[(0,t.eW)("font-awesome"),(0,t.bF)(a)]),(0,t.eW)("：图标字体。")]),(0,t.Lk)("li",null,[(0,t.Lk)("a",o,[(0,t.eW)("Layui"),(0,t.bF)(a)]),(0,t.eW)("：开源模块化前端 UI 组件库。")]),(0,t.Lk)("li",null,[(0,t.Lk)("a",l,[(0,t.eW)("toastr.js"),(0,t.bF)(a)]),(0,t.eW)("：通知提示。")]),(0,t.Lk)("li",null,[(0,t.Lk)("a",c,[(0,t.eW)("popper.js"),(0,t.bF)(a)]),(0,t.eW)("：一个轻量级的库用于管理工具提示和弹窗效果。")]),(0,t.Lk)("li",null,[(0,t.Lk)("a",i,[(0,t.eW)("Day.js"),(0,t.bF)(a)]),(0,t.eW)("：时间输入转换，支持时间戳，格式化时间、过去时间展示、解决因时区变更。")]),(0,t.Lk)("li",null,[(0,t.Lk)("a",r,[(0,t.eW)("list.js"),(0,t.bF)(a)]),(0,t.eW)("：实时搜索页面，并直接显示结果页面。为列表、表格或其他任何 HTMLL 标签增加了搜索，排序，过滤器和灵活性等元素。网页中会自动会大段空格压缩为一个空格，不用特意替换。")]),(0,t.Lk)("li",null,[(0,t.Lk)("a",u,[(0,t.eW)("watermark.js"),(0,t.bF)(a)]),(0,t.eW)("：网页文字水印。")]),(0,t.Lk)("li",null,[(0,t.Lk)("a",k,[(0,t.eW)("codemirror"),(0,t.bF)(a)]),(0,t.eW)("：代码编辑器，为 textarea 加行号。"),d])]),m,(0,t.Lk)("ul",null,[(0,t.Lk)("li",null,[(0,t.Lk)("a",v,[(0,t.eW)("clipboard.js"),(0,t.bF)(a)]),(0,t.eW)("：复制到剪贴板方式，无需 Flash。")]),(0,t.Lk)("li",null,[(0,t.Lk)("a",g,[(0,t.eW)("FileSaver.js"),(0,t.bF)(a)]),(0,t.eW)("：导出为本地文件，需手动指定路径。")]),(0,t.Lk)("li",null,[(0,t.Lk)("a",h,[(0,t.eW)("filepond"),(0,t.bF)(a)]),(0,t.eW)("：一个 JavaScript 文件上传库，可以上传拖入的任何内容，具有体积小、上传快、方便的文件管理等特点。")]),(0,t.Lk)("li",null,[(0,t.Lk)("a",b,[(0,t.eW)("timecat.js"),(0,t.bF)(a)]),(0,t.eW)("：一款 JS 的网页录屏工具。参考了游戏录像的原理而实现的渲染引擎，生成的录像文件只有传统视频的百分之一！还可以在录制语音的同时自动生成字幕，导出的视频文件可以跨端播放。")])]),f,(0,t.Lk)("ul",null,[(0,t.Lk)("li",null,[(0,t.Lk)("a",q,[(0,t.eW)("emoji-minesweeper"),(0,t.bF)(a)]),(0,t.eW)("：Emoji 符号的扫雷游戏。代码很简短，游戏创意很酷。寥寥 300+ 行代码实现该游戏，简短易于初学者学习。")]),(0,t.Lk)("li",null,[(0,t.Lk)("a",x,[(0,t.eW)("HueJumper2k"),(0,t.bF)(a)]),(0,t.eW)("：JS 实现的 2KB 大小的 3D 赛车游戏。")]),(0,t.Lk)("li",null,[(0,t.Lk)("a",y,[(0,t.eW)("battle-city"),(0,t.bF)(a)]),(0,t.eW)("：基于 React 的经典坦克大战。")]),(0,t.Lk)("li",null,[(0,t.Lk)("a",L,[(0,t.eW)("react-tetris"),(0,t.bF)(a)]),(0,t.eW)("：逼真的俄罗斯方块。")])]),w,(0,t.Lk)("p",null,[(0,t.eW)("CSS 样式："),(0,t.Lk)("a",W,[(0,t.eW)("You-need-to-know-css"),(0,t.bF)(a)])]),j,(0,t.Lk)("p",null,[(0,t.eW)("自适应布局以 Bootstrap 为主，具体说明参考 "),(0,t.Lk)("a",T,[(0,t.eW)("Bootstrap 文档"),(0,t.bF)(a)]),(0,t.eW)("。")]),_,(0,t.Lk)("p",null,[(0,t.Lk)("a",F,[(0,t.eW)("html-minifier"),(0,t.bF)(a)]),(0,t.eW)(" 能在本地批量压缩 HTML、CSS 和 JavaScript 源码。")]),S,(0,t.Lk)("section",H,[(0,t.Lk)("ol",M,[(0,t.Lk)("li",I,[(0,t.Lk)("p",null,[(0,t.Lk)("a",C,[(0,t.eW)("开源 JavaScript 插件和库"),(0,t.bF)(a)]),(0,t.eW)(),A])])])])])}]]),z=JSON.parse('{"path":"/code/HTML.html","title":"HTML","lang":"zh-CN","frontmatter":{"article":false,"title":"HTML","icon":"html","order":1,"description":"HTTPS 网页中，js、css、gif 等文件都必须要使用 https，否则会加载报错，图片可以不使用 https。 基础知识 相对路径 反义、转义字符 一些字符在 HTML 中拥有特殊的含义，如果我们希望浏览器正确地显示这些字符，我们必须在 HTML 源码中插入字符实体。 JavaScript 插件 font-awesome：图标字体。 Layui...","head":[["meta",{"property":"og:url","content":"https://newzone.top/code/HTML.html"}],["meta",{"property":"og:site_name","content":"LearnData-开源笔记"}],["meta",{"property":"og:title","content":"HTML"}],["meta",{"property":"og:description","content":"HTTPS 网页中，js、css、gif 等文件都必须要使用 https，否则会加载报错，图片可以不使用 https。 基础知识 相对路径 反义、转义字符 一些字符在 HTML 中拥有特殊的含义，如果我们希望浏览器正确地显示这些字符，我们必须在 HTML 源码中插入字符实体。 JavaScript 插件 font-awesome：图标字体。 Layui..."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-03T11:09:46.000Z"}],["meta",{"property":"article:author","content":"LearnData"}],["meta",{"property":"article:modified_time","content":"2024-04-03T11:09:46.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"HTML\\",\\"description\\":\\"HTTPS 网页中，js、css、gif 等文件都必须要使用 https，否则会加载报错，图片可以不使用 https。 基础知识 相对路径 反义、转义字符 一些字符在 HTML 中拥有特殊的含义，如果我们希望浏览器正确地显示这些字符，我们必须在 HTML 源码中插入字符实体。 JavaScript 插件 font-awesome：图标字体。 Layui...\\"}"]]},"headers":[{"level":2,"title":"基础知识","slug":"基础知识","link":"#基础知识","children":[{"level":3,"title":"相对路径","slug":"相对路径","link":"#相对路径","children":[]},{"level":3,"title":"反义、转义字符","slug":"反义、转义字符","link":"#反义、转义字符","children":[]}]},{"level":2,"title":"JavaScript 插件","slug":"javascript-插件","link":"#javascript-插件","children":[{"level":3,"title":"功能加强","slug":"功能加强","link":"#功能加强","children":[]},{"level":3,"title":"小游戏代码","slug":"小游戏代码","link":"#小游戏代码","children":[]}]},{"level":2,"title":"CSS 样式","slug":"css-样式","link":"#css-样式","children":[{"level":3,"title":"图片","slug":"图片","link":"#图片","children":[]},{"level":3,"title":"纯色背景","slug":"纯色背景","link":"#纯色背景","children":[]},{"level":3,"title":"鼠标经过变色","slug":"鼠标经过变色","link":"#鼠标经过变色","children":[]},{"level":3,"title":"隐藏元素","slug":"隐藏元素","link":"#隐藏元素","children":[]},{"level":3,"title":"高亮","slug":"高亮","link":"#高亮","children":[]}]},{"level":2,"title":"页面布局","slug":"页面布局","link":"#页面布局","children":[{"level":3,"title":"自适应布局","slug":"自适应布局","link":"#自适应布局","children":[]},{"level":3,"title":"客户端自适应","slug":"客户端自适应","link":"#客户端自适应","children":[]},{"level":3,"title":"本地压缩 HTML","slug":"本地压缩-html","link":"#本地压缩-html","children":[]}]}],"git":{"createdTime":1712142586000,"updatedTime":1712142586000,"contributors":[{"name":"MasonKai","email":"39311653+MasonKai@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":4.57,"words":1372},"filePathRelative":"code/HTML.md","localizedDate":"2024年4月3日","excerpt":"<p>HTTPS 网页中，js、css、gif 等文件都必须要使用 https，否则会加载报错，图片可以不使用 https。</p>\\n<h2>基础知识</h2>\\n<h3>相对路径</h3>\\n<div class=\\"language-javascript\\" data-ext=\\"js\\" data-title=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token operator\\">/</span> 根目录（electron 不适用）\\n<span class=\\"token punctuation\\">.</span><span class=\\"token operator\\">/</span> 当前目录（可省略不写）\\n<span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">.</span><span class=\\"token operator\\">/</span> 父级目录（返回到上一级目录）\\n<span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">.</span><span class=\\"token operator\\">/</span><span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">.</span><span class=\\"token operator\\">/</span> 祖父级目录（返回两级目录）\\n</code></pre></div>","autoDesc":true}')}}]);