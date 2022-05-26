/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import type {
  Interface,
  FunctionFragment,
  DecodedValue,
  Contract,
  Overrides,
  BigNumberish,
  BytesLike,
} from "fuels";

export type PersonInput = { name: string; address: string };

export type Person = { name: string; address: string };

interface DemoInterface extends Interface {
  functions: {
    name: FunctionFragment;
    tuple_function: FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "name",
    values: [string, [string, string], boolean]
  ): Uint8Array;
  encodeFunctionData(
    functionFragment: "tuple_function",
    values: [PersonInput]
  ): Uint8Array;

  decodeFunctionData(functionFragment: "name", data: BytesLike): DecodedValue;
  decodeFunctionData(
    functionFragment: "tuple_function",
    data: BytesLike
  ): DecodedValue;
}

export class Demo extends Contract {
  interface: DemoInterface;
  functions: {
    name(
      name: string,
      addresses: [string, string],
      foo: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<void>;

    tuple_function(
      person: PersonInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<void>;
  };
  callStatic: {
    name(
      name: string,
      addresses: [string, string],
      foo: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<void>;

    tuple_function(
      person: PersonInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<void>;
  };

  name(
    name: string,
    addresses: [string, string],
    foo: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<void>;

  tuple_function(
    person: PersonInput,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<void>;
}
