import { DataAction } from "./../../types";
import { actionsForGallery } from "./../actions/photos";

const initialState = [
  {
    url: "https://designlooter.com/images/common-kingfisher-svg-4.jpg",
    flexGrow: 1,
  },
  {
    url: "https://slopuhov.ru/2020/pictures/kmv/4/img_20200825_122304_3341.jpg",
    flexGrow: 1.3333333333333333,
  },
  {
    url: "https://proprikol.ru/wp-content/uploads/2020/04/kartinki-vulkany-27.jpg",
    flexGrow: 1.5037593984962405,
  },
  {
    url:
      "https://don16obqbay2c.cloudfront.net/frontend-test-task/images/493550746.jpg",
    flexGrow: 1.5023474178403755,
  },
  {
    url:
      "https://don16obqbay2c.cloudfront.net/frontend-test-task/images/493550739.jpg",
    flexGrow: 1.5023474178403755,
  },
  {
    url:
      "https://don16obqbay2c.cloudfront.net/frontend-test-task/images/493550755.jpg",
    flexGrow: 0.75,
  },
  {
    url:
      "https://don16obqbay2c.cloudfront.net/frontend-test-task/images/448964013.jpg",
    flexGrow: 0.7375,
  },
  {
    url:
      "https://don16obqbay2c.cloudfront.net/frontend-test-task/images/493550745.jpg",
    flexGrow: 1.5058823529411764,
  },
  {
    url:
      "https://don16obqbay2c.cloudfront.net/frontend-test-task/images/448964014.jpg",
    flexGrow: 0.75,
  },
  {
    url:
      "https://don16obqbay2c.cloudfront.net/frontend-test-task/images/448964009.jpg",
    flexGrow: 0.6707692307692308,
  },
  {
    url:
      "https://don16obqbay2c.cloudfront.net/frontend-test-task/images/448964021.jpg",
    flexGrow: 1.6,
  },
  {
    url:
      "https://don16obqbay2c.cloudfront.net/frontend-test-task/images/448964012.jpg",
    flexGrow: 1,
  },
  {
    url:
      "https://don16obqbay2c.cloudfront.net/frontend-test-task/images/493550740.jpg",
    flexGrow: 1.5,
  },
  {
    url:
      "https://don16obqbay2c.cloudfront.net/frontend-test-task/images/448964008.jpg",
    flexGrow: 1.5014749262536873,
  },
  {
    url:
      "https://don16obqbay2c.cloudfront.net/frontend-test-task/images/448964011.jpg",
    flexGrow: 2,
  },
  {
    url:
      "https://don16obqbay2c.cloudfront.net/frontend-test-task/images/448964016.jpg",
    flexGrow: 1.6023738872403561,
  },
  {
    url:
      "https://don16obqbay2c.cloudfront.net/frontend-test-task/images/448964020.jpg",
    flexGrow: 1.6,
  },
  {
    url:
      "https://don16obqbay2c.cloudfront.net/frontend-test-task/images/493550754.jpg",
    flexGrow: 1.0031347962382444,
  },
  {
    url:
      "https://don16obqbay2c.cloudfront.net/frontend-test-task/images/448964007.jpg",
    flexGrow: 1.6,
  },
  {
    url:
      "https://don16obqbay2c.cloudfront.net/frontend-test-task/images/448964010.jpg",
    flexGrow: 2.6191304347826088,
  },
];

const photosReduser = (state = initialState, action: DataAction) => {
  switch (action.type) {
    case actionsForGallery.CLEAN_GALLERY: {
      const newState: Array<any> = [];
      return newState;
    }
    case actionsForGallery.PUT_PHOTOS:
      return [...state, ...action.payload];
    case actionsForGallery.ADD_PHOTOS:
      return [...state, action.payload];
    case actionsForGallery.DELETE_PHOTO: {
      const newState = state.filter((photo: any, index: number) => {
        if (index !== action.payload) {
          return photo;
        }
      });
      return newState;
    }
    default:
      return state;
  }
};

export default photosReduser;
