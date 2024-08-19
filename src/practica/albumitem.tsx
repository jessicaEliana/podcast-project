import { ReactNode } from 'react';
import usRandom from '../assets/usRand1.png';

const ALBUMS = [
  {
    cover:
      'https://www.sopitas.com/wp-content/uploads/2017/07/appetite-for-destruction-portada-original.jpeg',
    title: 'appetite for destruction',
    artist: 'Guns and Roses',
    songs: '12 canciones',
  },
  {
    cover:
      'https://i.pinimg.com/736x/8d/35/b2/8d35b2436a0b15308cef60f0c5bacaad.jpg',
    title: 'under rug swept',
    artist: 'Alanis Morissette',
    songs: '17 canciones',
  },
  {
    cover: 'https://i.scdn.co/image/ab67616d0000b273305240b65c28020de3aac8eb',
    title: 'Desde el Fin del Mundo',
    artist: 'Duki',
    songs: '18 canciones',
  },
  {
    cover: 'https://i.scdn.co/image/ab67616d0000b273d1cbd51f69cb9803ea603c66',
    title: 'Romance',
    artist: 'Luis Miguel',
    songs: '12 canciones',
  },
  {
    cover:
      'https://upload.wikimedia.org/wikipedia/en/2/2b/Bruno_Mars_-_24K_Magic_%28Official_Album_Cover%29.png',
    title: '24K Magin',
    artist: 'Bruno Mars',
    songs: '9 canciones',
  },
];

type Props = {
  profileImg: string;
  userName: string;
  sectionTitle: string;
  children: ReactNode;
};

function AlbumsContainer(props: Props) {
  return (
    <section>
      <div className="profileComp">
        <img
          className="userFoto fotoListen"
          src={props.profileImg}
          alt="foto de usuario"
        />
        <div className="profileData">
          <p className="userName">{props.userName}</p>
          <h2 className="sectionTitle">{props.sectionTitle}</h2>
        </div>
      </div>
      <div>{props.children}</div>
    </section>
  );
}

type albumItemProps = {
  cover: string;
  title: string;
  artist: string;
  songs: string;
  size?: number;
};

function AlbumItem({ cover, title, artist, songs, size = 180 }: albumItemProps) {
  return (
    <article className="album-container">
      <img className="cover" src={cover}         width={size}
        height={size}/>
      <p className="album-title">{title}</p>
      <p className="album-artist">
        {artist}
        <br />
        {songs}
      </p>
    </article>
  );
}

function AlbumList() {
  return (
    <AlbumsContainer
      profileImg={usRandom}
      userName="Camila"
      sectionTitle="Listen Again"
    >
      <div className="listenConteiner">
        {ALBUMS.map((album) => {
          return (
            <AlbumItem
              key={album.title}
              cover={album.cover}
              title={album.title}
              artist={album.artist}
              songs={album.songs}
            />
          );
        })}
      </div>
    </AlbumsContainer>
  );
}

export default AlbumList;
