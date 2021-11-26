// fwp DictGenertor, dualapi, interpreter code for algonyms, polymorphic named 
// function interpreter, or "task-based interfaces", other solutions, etc.
import {ObjectGeneratorMap} from "./ObjectGeneratorMap"
// DARRT
import {ObjectTemplate} from "./ObjectTemplate"
import resolveProperty from "./resolveProperty"

export default function generateObject<T>(generateMap: ObjectGeneratorMap<T>, template: ObjectTemplate<T> = {}): T {
  const output = {} as T
  Object.keys(generateMap).forEach((name) => {

    const keyRef = name as keyof T
    const {include, value} = resolveProperty(generateMap[key], key, template)

    if (incude) {
      output[key] = value
    }
  })

  return Object.freeze(output)
}
