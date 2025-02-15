import MemberCreate from "@/views/MemberCreate.vue";
import LoginPage from "@/views/LoginPage.vue";
import MemberList from "@/views/MemberList.vue";

export const memberRouter = [
    {
        path: '/member/create',
        name: 'MemberCreate',
        component: MemberCreate
    },
    {
        path: '/login',
        name: 'LoginPage',
        component: LoginPage
    },
    {
        path: '/member/list',
        name: 'MemberList',
        component: MemberList
    }
]