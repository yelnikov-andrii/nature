export const Contacts = () => {
  return (
    <section className="contacts" id="contact">
    <div className="container">
      <div className="contacts__block">
        <div className="contacts__block_contacts">
          <h3 className="contacts__block_contacts-title">
            Contacts
          </h3>
          <p
            className="contacts__block_contacts-description"
          >
            2019 Rootz Foundation.
          <br/>
            <span>
              All rights reserved
            </span>
          </p>
        </div>

        <ul className="contacts__block_headquarters">
          <li className="contacts__block_headquarters-item">
            <h4 className="contacts__block_headquarters-title">
              Headquarters
            </h4>
          </li>
          <li className="contacts__block_headquarters-item">
           <a
              href="https://goo.gl/maps/s17XjWAFMQqxMEfk6"
              className="contacts__block_headquarters-link"
              target='_blank'
              rel="noreferrer"
            >
              1234 Taliban 
              <br/>
              LosAngeles, La
              <br className="contacts__block_headquarters-br"/>
                123456
           </a>
          </li>
          <li className="contacts__block_headquarters-item">
           <a 
             className="contacts__block_headquarters-link"
             href="tel:(123) 456-7890">
             (123) 456-7890
           </a>
          </li>
        </ul>

        <div className="contacts__block_social-media">
          <h4 
            className="contacts__block_social-media-title">
              Social media
          </h4>

          <ul className="contacts__block_social-media-list">
            <li
               className="contacts__block_social-media-item"
            >
            <a
                href="https://twitter.com"
                target='_blank'
                rel="noreferrer"
                className="contacts__block_social-media-link"
              >
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" rx="16" fill="#333333"/>
                <path d="M23.2532 12.66C23.2626 12.8024 23.2626 12.9508 23.2626 13.0961C23.2626 17.5418 19.756 22.6628 13.348 22.6628C11.372 22.6628 9.54025 22.1086 7.99707 21.1546C8.27936 21.1849 8.5491 21.197 8.83766 21.197C10.4687 21.197 11.9679 20.664 13.163 19.7616C11.6323 19.7313 10.3463 18.7622 9.90722 17.4297C10.4436 17.5054 10.9266 17.5054 11.4786 17.3692C10.6905 17.2146 9.98211 16.8013 9.4738 16.1995C8.9655 15.5978 8.68864 14.8447 8.69025 14.0682V14.0258C9.15132 14.2772 9.69394 14.4316 10.2617 14.4528C9.7844 14.1457 9.39301 13.7297 9.12218 13.2416C8.85135 12.7534 8.70945 12.2084 8.70907 11.6546C8.70907 11.0277 8.87844 10.4554 9.18268 9.95871C10.0575 10.9985 11.1491 11.8489 12.3865 12.4546C13.624 13.0603 14.9797 13.4079 16.3654 13.4747C15.8729 11.1882 17.6419 9.33789 19.7685 9.33789C20.7722 9.33789 21.6755 9.74369 22.3122 10.3978C23.0995 10.2555 23.8523 9.97082 24.5235 9.58925C24.2632 10.3675 23.7174 11.0247 22.9929 11.4396C23.6954 11.3669 24.3729 11.1791 25.0002 10.9157C24.5266 11.588 23.9338 12.1846 23.2532 12.66Z" fill="white"/>
              </svg>


            </a>
            </li>

          <li className="contacts__block_social-media-item">
           <a
              className="contacts__block_social-media-link"
              href="https://www.facebook.com"
              target='_blank'
              rel="noreferrer"
            >
           <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="32" height="32" rx="16" fill="#333333"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M17.0907 9.25C14.5612 9.25 13.6718 10.3742 13.6718 12.2641V13.6537H12.0957V15.9712H13.6718V22.6917H16.8246V15.9712H18.9307L19.2097 13.6537H16.8246L16.8303 12.4946C16.8303 11.8912 16.895 11.5668 17.8805 11.5668H19.1947V9.25H17.0907Z" fill="white"/>
          </svg>
           </a>
          </li>

          <li className="contacts__block_social-media-item">
            <a 
              className="contacts__block_social-media-link"
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="32" height="32" rx="16" fill="#333333"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M13.1512 10.4352C13.4076 9.41258 12.692 8.53857 11.5888 8.53857C10.8613 8.53857 10.2828 8.88937 10.0562 9.46609C9.69248 10.3877 10.2411 11.3449 11.225 11.4995C12.1494 11.6541 12.9544 11.2082 13.1512 10.4352ZM17.4748 13.8838C17.5016 13.8541 17.521 13.8348 17.5359 13.8199L17.5359 13.8199C17.5508 13.8051 17.5613 13.7947 17.5702 13.7828C18.3275 12.6769 19.4129 12.3558 20.6771 12.5461C22.1381 12.772 23.0743 13.7887 23.3128 15.3465C23.3665 15.7151 23.3963 16.0897 23.3963 16.4583C23.3963 16.8463 23.396 17.2342 23.3956 17.6222C23.3945 18.786 23.3934 19.9499 23.4023 21.1137C23.4023 21.2861 23.3606 21.3397 23.1817 21.3397C22.3647 21.3278 21.5477 21.3278 20.7367 21.3397C20.5578 21.3397 20.5101 21.2921 20.5161 21.1137C20.522 19.663 20.522 18.2182 20.5161 16.7675C20.5161 16.4405 20.4922 16.1135 20.4028 15.7924C20.1046 14.7697 18.9418 14.413 18.1069 15.0908C17.6596 15.4594 17.4808 15.941 17.4867 16.5118C17.4907 17.4233 17.4894 18.3321 17.488 19.2417V19.2421C17.4874 19.6971 17.4867 20.1524 17.4867 20.6083C17.4867 20.6593 17.4857 20.7103 17.4848 20.7612V20.7612C17.4823 20.8886 17.4799 21.016 17.4927 21.1434C17.5046 21.298 17.439 21.3278 17.3019 21.3278C16.473 21.3218 15.6381 21.3218 14.8092 21.3278C14.6601 21.3278 14.6064 21.298 14.6064 21.1316C14.6184 19.9008 14.6243 18.6701 14.6243 17.4393V17.4391C14.6243 15.9231 14.6243 14.407 14.6124 12.8969C14.6124 12.7304 14.6482 12.6828 14.8152 12.6828C15.6441 12.6947 16.4789 12.6888 17.3078 12.6828C17.4569 12.6828 17.4986 12.7245 17.4927 12.8731C17.4729 13.1445 17.4736 13.4077 17.4744 13.7001C17.4746 13.76 17.4748 13.8212 17.4748 13.8838ZM13.0084 17.0236C13.0084 18.3911 13.0084 19.7527 13.0144 21.1202C13.0144 21.2926 12.9786 21.352 12.7937 21.3461C11.9708 21.3342 11.1479 21.3401 10.3249 21.3461C10.1699 21.3461 10.1222 21.3104 10.1222 21.1499C10.1222 18.3971 10.1222 15.6443 10.1162 12.8914C10.1162 12.7487 10.152 12.7012 10.3011 12.7012C11.1419 12.7071 11.9768 12.7071 12.8176 12.7012C12.9846 12.7012 13.0084 12.7606 13.0084 12.9093V17.0236Z" fill="white"/>
            </svg>
            </a>
          </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  )
}