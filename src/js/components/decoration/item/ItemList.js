import Input from './input/Input';
import InputOption from "./input/InputOption";
import List from './list/List';
import Table from './table/Table';

export default {
    "input": {
        Component: Input,
        Options: InputOption
    },
    "list": {
        Component: List,
        Options: undefined
    },
    "table": {
        Component: Table,
        Options: undefined
    }
}