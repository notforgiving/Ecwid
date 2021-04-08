import {BaseAction} from './../../types/';

export enum actionsForStatus {
  NONE = 'NONE',
  LOADING ='LOADING',
  OK = 'OK',
}

export const setLoading = (): BaseAction => ({
  type: actionsForStatus.LOADING
});

export const setOk = (): BaseAction => ({
  type: actionsForStatus.OK
});

export const setNone = (): BaseAction => ({
  type: actionsForStatus.NONE
});



