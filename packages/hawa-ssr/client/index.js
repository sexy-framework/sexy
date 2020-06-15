import createRouter from 'router5';
import browserPlugin from 'router5-plugin-browser'

const router = createRouter()

router.usePlugin(
    browserPlugin({
        useHash: true
    })
)

router.start()