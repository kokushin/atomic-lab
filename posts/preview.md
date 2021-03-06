---
title: Preview
date: 2017-07-17
template: docs.ejs
url: preview/
next_url: docs/note/
next_label: Note
---
<h1 class="uc-section-title">Preview</h1>

## @preview

You can preview HTML by using `@preview` comment like below.

<div class="uc-code-unit"><pre>
<code class="html">&lt;!--@preview
&lt;p&gt;Hello world&lt;/p&gt;
--&gt;</code></pre></div>

## @template

You can define original HTML tags to be rendered on preview screen.

<div class="uc-code-unit"><pre>
<code class="html">&lt;!--@template --&gt;
code here
&lt;!--@/template --&gt;</code></pre></div>

### define default variables

You can also declare default variables when no parameters are found

<div class="uc-code-unit"><pre>
<code class="html">&lt;!--@template text="hoge" --&gt;
&lt;p&gt;{text}&lt;/p&gt;
&lt;!--@/template --&gt;</code></pre></div>

Supporse that above component name is `main-visual`, You can call defined template via `@preview`.

<div class="uc-code-unit"><pre>
<code class="html">&lt;!--@preview 
&lt;main-visual text="hello world" /&gt;
--&gt;</code></pre></div>

is to be

<div class="uc-code-unit"><pre>
<code class="html">&lt;p&gt;hello world&lt;/p&gt;</code></pre></div>