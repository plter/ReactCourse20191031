import styles from './index.css';
import Link from 'umi/link';
import { FormattedMessage } from 'umi-plugin-locale';
import { DatePicker } from 'antd';
import axios from 'axios'

export default function () {

    return (
        <div className={styles.normal}>
            <Link to="/user">go to /users</Link>
            <p>Hello</p>
            <DatePicker />
            <FormattedMessage id="WELCOME_TO_UMI_WORLD" values={{ name: '小伙子' }} />;
            <Link to="/news/sport">go to /new</Link>
        </div>
    );
}
