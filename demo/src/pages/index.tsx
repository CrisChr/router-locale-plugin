import styles from './index.less';
import { history, useIntl } from 'umi';

export default function IndexPage() {
  const intl = useIntl();
  const path_name = location.pathname;
  return (
    <div>
      <button
        onClick={() => history.push(['/zh', '/'].includes(path_name) ? '/en' : '/zh')}>
        {intl.formatMessage({ id: 'click' })}
      </button>
      <h1 className={styles.title}>
        {intl.formatMessage({ id: 'title' })}
      </h1>
    </div>
  );
}
