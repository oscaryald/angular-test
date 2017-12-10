
import { List1Component, List2Component} from './lists/index';
import { CounterHostComponent, 
		TimerHostComponent, 
		NameCardHostComponent, 
		MessageBoxHostComponent, 
		ChangeHostComponent,
		ViewContentHostComponent,
		BlockHostComponent
		} from "./components/index";

import { CalcComponent } from './two-way-databinding/index';
import { CounterParentComponent } from './serviceHierarhy/index';

import { HomeComponent,
		 PhraseListComponent,
		 PhraseDetailsComponent,
} from './routing/index';

import {
    Form1Component,
    Form2Component
} from './forms/index'

import {
    GetRequestComponent,
    PostRequestComponent
} from './http/index'

export const appRouts = [
	{
		path:'list-1',
		component: List1Component
	},
	{
		path:'list-2',
		component: List2Component
	},
	{
		path: "samples-1",
		component: CounterHostComponent
	},
	{
		path: "timer",
		component: TimerHostComponent
	},
	{
		path: "name-card",
		component: NameCardHostComponent
	},
	{
		path: "message-box",
		component: MessageBoxHostComponent
	},
	{
		path: "change",
		component: ChangeHostComponent
	},
	{
		path: "view-content",
		component: ViewContentHostComponent
	},
	{
		path: "ng-model",
		component: CalcComponent
	},
    {
        path: "block",
        component: BlockHostComponent
    },
    {
        path: "service1",
        component: CounterParentComponent,
    },
    {
    	path:"routes",
    	component: HomeComponent,
    },
    {
    	path:"phrases",
    	component: PhraseListComponent,
    },
    {
        path: "phrase/:id",
        component: PhraseDetailsComponent
    },
    {
        path: "form1",
        component: Form1Component
    },
    {
        path: "form2",
        component: Form2Component
    },
    {
        path: "http-sample1",
        component: GetRequestComponent
    },
    {
        path: "http-sample2",
        component: PostRequestComponent
    },
	{ 
		path: '',
	    redirectTo: '/list-1',
	    pathMatch: 'full'
	}
]
