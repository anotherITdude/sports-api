//api types
export interface Position {
  resource: string;
  id: number;
  name: string;
}

export interface Player {
  resource: string;
  id: number;
  country_id: number;
  firstname: string;
  lastname: string;
  fullname: string;
  image_path: string;
  dateofbirth: string;
  gender: string;
  battingstyle: string | "";
  bowlingstyle: string | "";
  position?: Position;
  updated_at: string;
}

export default Player;
