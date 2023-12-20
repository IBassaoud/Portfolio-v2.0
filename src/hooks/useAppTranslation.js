import { useTranslation } from 'react-i18next';

const useAppTranslation = () => {
  const { t } = useTranslation();
  return t;
};

export default useAppTranslation;
