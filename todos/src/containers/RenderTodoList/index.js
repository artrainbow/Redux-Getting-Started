import {connect} from 'react-redux';
import TodoList from '../../components/TodoList'

export default connect(
    (store) => ({store}),
)(TodoList);