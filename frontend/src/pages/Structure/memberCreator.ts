import CONFIG from './config';

const memberCreator = (member: any): HTMLDivElement => {
  const node: HTMLDivElement = document.createElement('div');
  node.className = CONFIG.nodeHTMLclass;
  const container = document.createElement('div');
  container.className = 'content';

  addImage(node, member);
  addActive(node, member);
  addName(container, member);
  addTitle(container, member);
  addOpenToWork(container, member);
  addSocials(container, member);

  node.appendChild(container);
  return node;
};

const addImage = (node: HTMLDivElement, member: any) => {
  if (member.image) {
    const container = document.createElement('div');
    container.className = member.manager ? 'manager-avatar' : 'avatar';
    const image = document.createElement('img');
    image.src = member.image;
    container.appendChild(image);
    node.appendChild(container);
  }
};

const addActive = (node: HTMLDivElement, member: any) => {
  if (member.active) {
    if (member.absent) {
      node.classList.add('absent-member');
    } else {
      node.classList.add('active-member');
    }
  } else {
    node.classList.add('inactive-member');
  }
};

const addName = (container: HTMLDivElement, member: any) => {
  if (member.name) {
    const text = document.createElement('p');
    text.innerHTML = member.name;
    text.className = 'node-name';
    container.appendChild(text);
  }
};

const addTitle = (container: HTMLDivElement, member: any) => {
  if (member.title) {
    const text = document.createElement('p');
    text.innerHTML = member.title;
    text.className = 'node-title';
    container.appendChild(text);
  }
};

const addOpenToWork = (container: HTMLDivElement, member: any) => {
  if (member.openToWork) {
    const status = document.createElement('div');
    status.className = 'node-status';
    status.innerHTML = `<img src="./assets/Check.svg" />`;
    const statusText = document.createElement('p');
    statusText.innerText = 'Open to work';
    container.appendChild(status);
    status.appendChild(statusText);
  }
};

const addSocials = (container: HTMLDivElement, member: any) => {
  if (member.socials || member.email) {
    const socials = document.createElement('div');
    socials.className = 'socials';
    if (member.email) {
      const social = document.createElement('div');
      social.className = 'social';
      social.innerHTML = `<a href="mailto:${member.email}"><img src="./assets/email.png" /></a>`;
      socials.appendChild(social);
    }

    Object.entries(member.socials).forEach(([key, value]) => {
      const container = document.createElement('div');
      container.className = 'social';
      container.innerHTML = `<a href="${value}"><img src="./assets/${key}.png" /></a>`;
      socials.appendChild(container);
    });
    container.appendChild(socials);
  }
};

export default memberCreator;
