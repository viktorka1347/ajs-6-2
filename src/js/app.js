export default function getSpecial(obj) {
  return obj.special.map((item) => {
    const {
      id, name, icon, description = 'Описание недоступно',
    } = item;
    return {
      id, name, icon, description,
    };
  });
}
