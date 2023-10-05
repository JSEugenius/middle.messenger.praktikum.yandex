import style from './avatar.module.scss';

// language=hbs
export const avatarTmpl = `
  <div class="${style.avatar}">
      <label>
          <input name="avatar" class="${style.input}" type="file" />
          <div class="${style.personal_container}">
          <img src="{{imgSrc}}" class="${style.avatar_img}" alt="avatar" />
              <div class="${style.upload_container}">
                  <span class="${style.upload_content}">Поменять аватар</span>
              </div>
          </div>
      </label>
  </div>
`;
