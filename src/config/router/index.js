import Home from "../../pages/Home";
import Articles from "../../pages/Articles";
import Comments from "../../pages/Comments";

const pageRoutes = [
        {
            path: '/',
            icon: 'DashboardOutlined',
            name: 'Dashboard',
            component: Home
        },
        {   
            path: '/articles',
            icon: 'InfoCircleOutlined',
            name: 'Articles',
            component: Articles
        },
        {   
            path: '/comments',
            icon: 'CommentOutlined',
            name: 'Comments',
            component: Comments
        }
    ];

export default pageRoutes;