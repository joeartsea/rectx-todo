import { Controller } from 'rectx'

export default class LikeController extends Controller {
    state = {
      isLike: false,
      isMount: false
    }

    handleClick = () => {
      this.setState({
        isLike: !this.state.isLike
      })
    }
}
