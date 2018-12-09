import styles from './index.css';

import { LocaleProvider} from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';

moment.locale('zh-cn');


function BasicLayout(props) {
  return (
    <LocaleProvider locale={zhCN}>
        <div className={styles.normal}>
          <h1 className={styles.title}>Yay! Welcome to umi!</h1>
          { props.children }
        </div>
    </LocaleProvider>
  );
}

export default BasicLayout;
