import{_ as s,o as n,c as a,e}from"./app.882031eb.js";const t={},p=e(`<h1 id="严格相等比较运算符" tabindex="-1"><a class="header-anchor" href="#严格相等比较运算符" aria-hidden="true">#</a> 严格相等比较运算符</h1><p>更好的使用严格相等比较运算符</p><h2 id="不推荐" tabindex="-1"><a class="header-anchor" href="#不推荐" aria-hidden="true">#</a> ==（不推荐）</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token number">1</span> <span class="token operator">==</span> <span class="token string">&#39;1&#39;</span> <span class="token comment">// true</span>
<span class="token number">0</span> <span class="token operator">==</span> <span class="token string">&#39;&#39;</span> <span class="token comment">// true</span>
<span class="token keyword">null</span> <span class="token operator">==</span> <span class="token keyword">undefined</span> <span class="token comment">// true</span>
<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">&#39;&#39;</span> <span class="token comment">// true</span>
<span class="token comment">// ==只比较值，不比较类型，一般情况下会埋下隐患，特殊情况下可以使用</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="推荐" tabindex="-1"><a class="header-anchor" href="#推荐" aria-hidden="true">#</a> ===（推荐）</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token number">1</span> <span class="token operator">===</span> <span class="token string">&#39;1&#39;</span> <span class="token comment">// false</span>
<span class="token number">0</span> <span class="token operator">===</span> <span class="token string">&#39;&#39;</span> <span class="token comment">// false</span>
<span class="token keyword">null</span> <span class="token operator">===</span> <span class="token keyword">undefined</span> <span class="token comment">// false</span>
<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;&#39;</span> <span class="token comment">// false</span>
<span class="token comment">// ===既比较值，也比较类型，一般情况下会埋下隐患</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h2><p>任何情况下都应该优先使用===吗</p>`,8),c=[p];function o(r,l){return n(),a("div",null,c)}const d=s(t,[["render",o],["__file","严格相等比较运算符.html.vue"]]);export{d as default};
