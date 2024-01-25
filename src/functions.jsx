export const For = ({ obj, render }) => {
  return obj.map((value, index) => {
    return render(value, index)
  })
}
