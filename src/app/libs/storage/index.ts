type StorageType = "local" | "session";

let defaultStorage: StorageType = "session";

// Record 타입은 < 키 값 타입, 값 타입 >
// -> StorageType을 키 값으로 쓴다는 것.
//    Storage를 값으로 쓴다는 것. 이건 그냥 제공되나봐
// 그래서 availableStorage의 키 값이 "local", "session"인 거고
// 그 값이 로컬 스토리지와 세션 스토리지인 것!
type AvailableStorageType = Record<StorageType, Storage>;

const availableStorage: AvailableStorageType = {
  local: localStorage,
  session: sessionStorage,
};

export const storage = {
  setDefault(type: StorageType) {
    defaultStorage = type;
  },
  getItem(key: string) {
    return availableStorage[defaultStorage].getItem(key);
  },
  setItem(key: string, value: string) {
    availableStorage[defaultStorage].setItem(key, value);
  },
  removeItem(key: string) {
    availableStorage[defaultStorage].removeItem(key);
  },
  clear() {
    availableStorage[defaultStorage].clear();
  },

  /** 직접 storage type 지정 */
  getItemOther(type: StorageType, key: string) {
    return availableStorage[type].getItem(key);
  },
  setItemOther(type: StorageType, key: string, value: string) {
    availableStorage[type].setItem(key, value);
  },
  removeItemOther(type: StorageType, key: string) {
    availableStorage[type].removeItem(key);
  },
  clearOther(type: StorageType) {
    availableStorage[type].clear();
  },

  /** 모든 저장소에 적용 */
  setItemAll(key: string, value: string) {
    Object.keys(availableStorage).map((type) =>
      availableStorage[type as StorageType].setItem(key, value)
    );
  },
  removeItemAll(key: string) {
    Object.keys(availableStorage).map((type) =>
      availableStorage[type as StorageType].removeItem(key)
    );
  },
  clearAll() {
    Object.keys(availableStorage).map((type) =>
      availableStorage[type as StorageType].clear()
    );
  },
};
