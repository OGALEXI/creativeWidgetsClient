import './side.menu.css';

export function SideMenu() {
  return (
    <div className='side-menu-wrapper-ctn'>
      <h1>Creative Widgets</h1>
      <a id='new-widget-btn' href='/new-widget'>
        +
      </a>
      <ul>
        <li className='menu-item-ctn'>
          <a className='menu-link' href='/'>
            <svg
              className='svg-icon'
              height='35'
              width='35'
              viewBox='0 0 20 20'
            >
              <path d='M16.803,18.615h-4.535c-1,0-1.814-0.812-1.814-1.812v-4.535c0-1.002,0.814-1.814,1.814-1.814h4.535c1.001,0,1.813,0.812,1.813,1.814v4.535C18.616,17.803,17.804,18.615,16.803,18.615zM17.71,12.268c0-0.502-0.405-0.906-0.907-0.906h-4.535c-0.501,0-0.906,0.404-0.906,0.906v4.535c0,0.502,0.405,0.906,0.906,0.906h4.535c0.502,0,0.907-0.404,0.907-0.906V12.268z M16.803,9.546h-4.535c-1,0-1.814-0.812-1.814-1.814V3.198c0-1.002,0.814-1.814,1.814-1.814h4.535c1.001,0,1.813,0.812,1.813,1.814v4.534C18.616,8.734,17.804,9.546,16.803,9.546zM17.71,3.198c0-0.501-0.405-0.907-0.907-0.907h-4.535c-0.501,0-0.906,0.406-0.906,0.907v4.534c0,0.501,0.405,0.908,0.906,0.908h4.535c0.502,0,0.907-0.406,0.907-0.908V3.198z M7.733,18.615H3.198c-1.002,0-1.814-0.812-1.814-1.812v-4.535c0-1.002,0.812-1.814,1.814-1.814h4.535c1.002,0,1.814,0.812,1.814,1.814v4.535C9.547,17.803,8.735,18.615,7.733,18.615zM8.64,12.268c0-0.502-0.406-0.906-0.907-0.906H3.198c-0.501,0-0.907,0.404-0.907,0.906v4.535c0,0.502,0.406,0.906,0.907,0.906h4.535c0.501,0,0.907-0.404,0.907-0.906V12.268z M7.733,9.546H3.198c-1.002,0-1.814-0.812-1.814-1.814V3.198c0-1.002,0.812-1.814,1.814-1.814h4.535c1.002,0,1.814,0.812,1.814,1.814v4.534C9.547,8.734,8.735,9.546,7.733,9.546z M8.64,3.198c0-0.501-0.406-0.907-0.907-0.907H3.198c-0.501,0-0.907,0.406-0.907,0.907v4.534c0,0.501,0.406,0.908,0.907,0.908h4.535c0.501,0,0.907-0.406,0.907-0.908V3.198z'></path>
            </svg>
            <span>Dashboard</span>
          </a>
        </li>
        <li className='menu-item-ctn'>
          <a className='menu-link' href='/'>
            <svg
              className='svg-icon'
              height='35'
              width='35'
              viewBox='0 0 20 20'
            >
              <path d='M6.176,7.241V6.78c0-0.221-0.181-0.402-0.402-0.402c-0.221,0-0.403,0.181-0.403,0.402v0.461C4.79,7.416,4.365,7.955,4.365,8.591c0,0.636,0.424,1.175,1.006,1.35v3.278c0,0.222,0.182,0.402,0.403,0.402c0.222,0,0.402-0.181,0.402-0.402V9.941c0.582-0.175,1.006-0.714,1.006-1.35C7.183,7.955,6.758,7.416,6.176,7.241 M5.774,9.195c-0.332,0-0.604-0.272-0.604-0.604c0-0.332,0.272-0.604,0.604-0.604c0.332,0,0.604,0.272,0.604,0.604C6.377,8.923,6.105,9.195,5.774,9.195 M10.402,10.058V6.78c0-0.221-0.181-0.402-0.402-0.402c-0.222,0-0.402,0.181-0.402,0.402v3.278c-0.582,0.175-1.006,0.714-1.006,1.35c0,0.637,0.424,1.175,1.006,1.351v0.461c0,0.222,0.181,0.402,0.402,0.402c0.221,0,0.402-0.181,0.402-0.402v-0.461c0.582-0.176,1.006-0.714,1.006-1.351C11.408,10.772,10.984,10.233,10.402,10.058M10,12.013c-0.333,0-0.604-0.272-0.604-0.604S9.667,10.805,10,10.805c0.332,0,0.604,0.271,0.604,0.604S10.332,12.013,10,12.013M14.629,8.448V6.78c0-0.221-0.182-0.402-0.403-0.402c-0.221,0-0.402,0.181-0.402,0.402v1.668c-0.581,0.175-1.006,0.714-1.006,1.35c0,0.636,0.425,1.176,1.006,1.351v2.07c0,0.222,0.182,0.402,0.402,0.402c0.222,0,0.403-0.181,0.403-0.402v-2.07c0.581-0.175,1.006-0.715,1.006-1.351C15.635,9.163,15.21,8.624,14.629,8.448 M14.226,10.402c-0.331,0-0.604-0.272-0.604-0.604c0-0.332,0.272-0.604,0.604-0.604c0.332,0,0.604,0.272,0.604,0.604C14.83,10.13,14.558,10.402,14.226,10.402 M17.647,3.962H2.353c-0.221,0-0.402,0.181-0.402,0.402v11.27c0,0.222,0.181,0.402,0.402,0.402h15.295c0.222,0,0.402-0.181,0.402-0.402V4.365C18.05,4.144,17.869,3.962,17.647,3.962 M17.245,15.232H2.755V4.768h14.49V15.232z'></path>
            </svg>
            Settings
          </a>
        </li>
        <li className='menu-item-ctn'>
          <a className='menu-link' href='/'>
            <svg
              className='svg-icon'
              height='35'
              width='35'
              viewBox='0 0 20 20'
            >
              <path d='M14.781,14.347h1.738c0.24,0,0.436-0.194,0.436-0.435v-1.739c0-0.239-0.195-0.435-0.436-0.435h-1.738c-0.239,0-0.435,0.195-0.435,0.435v1.739C14.347,14.152,14.542,14.347,14.781,14.347 M18.693,3.045H1.307c-0.48,0-0.869,0.39-0.869,0.869v12.17c0,0.479,0.389,0.869,0.869,0.869h17.387c0.479,0,0.869-0.39,0.869-0.869V3.915C19.562,3.435,19.173,3.045,18.693,3.045 M18.693,16.085H1.307V9.13h17.387V16.085z M18.693,5.653H1.307V3.915h17.387V5.653zM3.48,12.608h7.824c0.24,0,0.435-0.195,0.435-0.436c0-0.239-0.194-0.435-0.435-0.435H3.48c-0.24,0-0.435,0.195-0.435,0.435C3.045,12.413,3.24,12.608,3.48,12.608 M3.48,14.347h6.085c0.24,0,0.435-0.194,0.435-0.435s-0.195-0.435-0.435-0.435H3.48c-0.24,0-0.435,0.194-0.435,0.435S3.24,14.347,3.48,14.347'></path>
            </svg>
            Payment
          </a>
        </li>
      </ul>
    </div>
  );
}
