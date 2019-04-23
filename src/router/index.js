import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import HtmlHome from "@/components/HtmlHome";
import Content from "@/components/Content";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/html/:id",
		name: "HtmlHome",
	  redirect:'/html/2/content/201',
      component: HtmlHome,
		children: [
			{
				path: 'content/:userid',
				name: 'htmlcontent',
				component:Content
			}
	  ]
    },
    {
      path: "/css/:id",
		name: "CssHome",
	  redirect:'/css/3/content/301',
		component: HtmlHome,

		children: [
			{
				path: 'content/:userid',
				name: 'csscontent',
				component:Content
			}
	  ]
	}
	,
    {
      path: "/javascript/:id",
		name: "Javascript",
	  redirect:'/Javascript/4/content/401',
		component: HtmlHome,
		children: [
			{
				path: 'content/:userid',
				name: 'jccontent',
				component:Content
			}
	  ]
    }
  ]
});
