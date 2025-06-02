
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Categoria
 * 
 */
export type Categoria = $Result.DefaultSelection<Prisma.$CategoriaPayload>
/**
 * Model Descuento
 * 
 */
export type Descuento = $Result.DefaultSelection<Prisma.$DescuentoPayload>
/**
 * Model Detalle
 * 
 */
export type Detalle = $Result.DefaultSelection<Prisma.$DetallePayload>
/**
 * Model Direccion
 * 
 */
export type Direccion = $Result.DefaultSelection<Prisma.$DireccionPayload>
/**
 * Model Img
 * 
 */
export type Img = $Result.DefaultSelection<Prisma.$ImgPayload>
/**
 * Model ItemOrden
 * 
 */
export type ItemOrden = $Result.DefaultSelection<Prisma.$ItemOrdenPayload>
/**
 * Model OrdenCompra
 * 
 */
export type OrdenCompra = $Result.DefaultSelection<Prisma.$OrdenCompraPayload>
/**
 * Model Precio
 * 
 */
export type Precio = $Result.DefaultSelection<Prisma.$PrecioPayload>
/**
 * Model Producto
 * 
 */
export type Producto = $Result.DefaultSelection<Prisma.$ProductoPayload>
/**
 * Model Talle
 * 
 */
export type Talle = $Result.DefaultSelection<Prisma.$TallePayload>
/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model UsuarioDireccion
 * 
 */
export type UsuarioDireccion = $Result.DefaultSelection<Prisma.$UsuarioDireccionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Rol: {
  ADMIN: 'ADMIN',
  CLIENTE: 'CLIENTE'
};

export type Rol = (typeof Rol)[keyof typeof Rol]


export const TipoProducto: {
  REMERA: 'REMERA',
  PANTALON: 'PANTALON',
  ZAPATILLA: 'ZAPATILLA',
  OTRO: 'OTRO'
};

export type TipoProducto = (typeof TipoProducto)[keyof typeof TipoProducto]

}

export type Rol = $Enums.Rol

export const Rol: typeof $Enums.Rol

export type TipoProducto = $Enums.TipoProducto

export const TipoProducto: typeof $Enums.TipoProducto

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Categorias
 * const categorias = await prisma.categoria.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Categorias
   * const categorias = await prisma.categoria.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.categoria`: Exposes CRUD operations for the **Categoria** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categorias
    * const categorias = await prisma.categoria.findMany()
    * ```
    */
  get categoria(): Prisma.CategoriaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.descuento`: Exposes CRUD operations for the **Descuento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Descuentos
    * const descuentos = await prisma.descuento.findMany()
    * ```
    */
  get descuento(): Prisma.DescuentoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.detalle`: Exposes CRUD operations for the **Detalle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Detalles
    * const detalles = await prisma.detalle.findMany()
    * ```
    */
  get detalle(): Prisma.DetalleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.direccion`: Exposes CRUD operations for the **Direccion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Direccions
    * const direccions = await prisma.direccion.findMany()
    * ```
    */
  get direccion(): Prisma.DireccionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.img`: Exposes CRUD operations for the **Img** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Imgs
    * const imgs = await prisma.img.findMany()
    * ```
    */
  get img(): Prisma.ImgDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.itemOrden`: Exposes CRUD operations for the **ItemOrden** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ItemOrdens
    * const itemOrdens = await prisma.itemOrden.findMany()
    * ```
    */
  get itemOrden(): Prisma.ItemOrdenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ordenCompra`: Exposes CRUD operations for the **OrdenCompra** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrdenCompras
    * const ordenCompras = await prisma.ordenCompra.findMany()
    * ```
    */
  get ordenCompra(): Prisma.OrdenCompraDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.precio`: Exposes CRUD operations for the **Precio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Precios
    * const precios = await prisma.precio.findMany()
    * ```
    */
  get precio(): Prisma.PrecioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.producto`: Exposes CRUD operations for the **Producto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Productos
    * const productos = await prisma.producto.findMany()
    * ```
    */
  get producto(): Prisma.ProductoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.talle`: Exposes CRUD operations for the **Talle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Talles
    * const talles = await prisma.talle.findMany()
    * ```
    */
  get talle(): Prisma.TalleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuarioDireccion`: Exposes CRUD operations for the **UsuarioDireccion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UsuarioDireccions
    * const usuarioDireccions = await prisma.usuarioDireccion.findMany()
    * ```
    */
  get usuarioDireccion(): Prisma.UsuarioDireccionDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Categoria: 'Categoria',
    Descuento: 'Descuento',
    Detalle: 'Detalle',
    Direccion: 'Direccion',
    Img: 'Img',
    ItemOrden: 'ItemOrden',
    OrdenCompra: 'OrdenCompra',
    Precio: 'Precio',
    Producto: 'Producto',
    Talle: 'Talle',
    Usuario: 'Usuario',
    UsuarioDireccion: 'UsuarioDireccion'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "categoria" | "descuento" | "detalle" | "direccion" | "img" | "itemOrden" | "ordenCompra" | "precio" | "producto" | "talle" | "usuario" | "usuarioDireccion"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Categoria: {
        payload: Prisma.$CategoriaPayload<ExtArgs>
        fields: Prisma.CategoriaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoriaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoriaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          findFirst: {
            args: Prisma.CategoriaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoriaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          findMany: {
            args: Prisma.CategoriaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>[]
          }
          create: {
            args: Prisma.CategoriaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          createMany: {
            args: Prisma.CategoriaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoriaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>[]
          }
          delete: {
            args: Prisma.CategoriaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          update: {
            args: Prisma.CategoriaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          deleteMany: {
            args: Prisma.CategoriaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoriaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoriaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>[]
          }
          upsert: {
            args: Prisma.CategoriaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          aggregate: {
            args: Prisma.CategoriaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategoria>
          }
          groupBy: {
            args: Prisma.CategoriaGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriaGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoriaCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriaCountAggregateOutputType> | number
          }
        }
      }
      Descuento: {
        payload: Prisma.$DescuentoPayload<ExtArgs>
        fields: Prisma.DescuentoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DescuentoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DescuentoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DescuentoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DescuentoPayload>
          }
          findFirst: {
            args: Prisma.DescuentoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DescuentoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DescuentoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DescuentoPayload>
          }
          findMany: {
            args: Prisma.DescuentoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DescuentoPayload>[]
          }
          create: {
            args: Prisma.DescuentoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DescuentoPayload>
          }
          createMany: {
            args: Prisma.DescuentoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DescuentoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DescuentoPayload>[]
          }
          delete: {
            args: Prisma.DescuentoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DescuentoPayload>
          }
          update: {
            args: Prisma.DescuentoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DescuentoPayload>
          }
          deleteMany: {
            args: Prisma.DescuentoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DescuentoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DescuentoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DescuentoPayload>[]
          }
          upsert: {
            args: Prisma.DescuentoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DescuentoPayload>
          }
          aggregate: {
            args: Prisma.DescuentoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDescuento>
          }
          groupBy: {
            args: Prisma.DescuentoGroupByArgs<ExtArgs>
            result: $Utils.Optional<DescuentoGroupByOutputType>[]
          }
          count: {
            args: Prisma.DescuentoCountArgs<ExtArgs>
            result: $Utils.Optional<DescuentoCountAggregateOutputType> | number
          }
        }
      }
      Detalle: {
        payload: Prisma.$DetallePayload<ExtArgs>
        fields: Prisma.DetalleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DetalleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetallePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DetalleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetallePayload>
          }
          findFirst: {
            args: Prisma.DetalleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetallePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DetalleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetallePayload>
          }
          findMany: {
            args: Prisma.DetalleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetallePayload>[]
          }
          create: {
            args: Prisma.DetalleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetallePayload>
          }
          createMany: {
            args: Prisma.DetalleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DetalleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetallePayload>[]
          }
          delete: {
            args: Prisma.DetalleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetallePayload>
          }
          update: {
            args: Prisma.DetalleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetallePayload>
          }
          deleteMany: {
            args: Prisma.DetalleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DetalleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DetalleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetallePayload>[]
          }
          upsert: {
            args: Prisma.DetalleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetallePayload>
          }
          aggregate: {
            args: Prisma.DetalleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDetalle>
          }
          groupBy: {
            args: Prisma.DetalleGroupByArgs<ExtArgs>
            result: $Utils.Optional<DetalleGroupByOutputType>[]
          }
          count: {
            args: Prisma.DetalleCountArgs<ExtArgs>
            result: $Utils.Optional<DetalleCountAggregateOutputType> | number
          }
        }
      }
      Direccion: {
        payload: Prisma.$DireccionPayload<ExtArgs>
        fields: Prisma.DireccionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DireccionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DireccionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DireccionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DireccionPayload>
          }
          findFirst: {
            args: Prisma.DireccionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DireccionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DireccionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DireccionPayload>
          }
          findMany: {
            args: Prisma.DireccionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DireccionPayload>[]
          }
          create: {
            args: Prisma.DireccionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DireccionPayload>
          }
          createMany: {
            args: Prisma.DireccionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DireccionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DireccionPayload>[]
          }
          delete: {
            args: Prisma.DireccionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DireccionPayload>
          }
          update: {
            args: Prisma.DireccionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DireccionPayload>
          }
          deleteMany: {
            args: Prisma.DireccionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DireccionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DireccionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DireccionPayload>[]
          }
          upsert: {
            args: Prisma.DireccionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DireccionPayload>
          }
          aggregate: {
            args: Prisma.DireccionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDireccion>
          }
          groupBy: {
            args: Prisma.DireccionGroupByArgs<ExtArgs>
            result: $Utils.Optional<DireccionGroupByOutputType>[]
          }
          count: {
            args: Prisma.DireccionCountArgs<ExtArgs>
            result: $Utils.Optional<DireccionCountAggregateOutputType> | number
          }
        }
      }
      Img: {
        payload: Prisma.$ImgPayload<ExtArgs>
        fields: Prisma.ImgFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ImgFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImgPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ImgFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImgPayload>
          }
          findFirst: {
            args: Prisma.ImgFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImgPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ImgFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImgPayload>
          }
          findMany: {
            args: Prisma.ImgFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImgPayload>[]
          }
          create: {
            args: Prisma.ImgCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImgPayload>
          }
          createMany: {
            args: Prisma.ImgCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ImgCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImgPayload>[]
          }
          delete: {
            args: Prisma.ImgDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImgPayload>
          }
          update: {
            args: Prisma.ImgUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImgPayload>
          }
          deleteMany: {
            args: Prisma.ImgDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ImgUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ImgUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImgPayload>[]
          }
          upsert: {
            args: Prisma.ImgUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImgPayload>
          }
          aggregate: {
            args: Prisma.ImgAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImg>
          }
          groupBy: {
            args: Prisma.ImgGroupByArgs<ExtArgs>
            result: $Utils.Optional<ImgGroupByOutputType>[]
          }
          count: {
            args: Prisma.ImgCountArgs<ExtArgs>
            result: $Utils.Optional<ImgCountAggregateOutputType> | number
          }
        }
      }
      ItemOrden: {
        payload: Prisma.$ItemOrdenPayload<ExtArgs>
        fields: Prisma.ItemOrdenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItemOrdenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemOrdenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItemOrdenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemOrdenPayload>
          }
          findFirst: {
            args: Prisma.ItemOrdenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemOrdenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItemOrdenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemOrdenPayload>
          }
          findMany: {
            args: Prisma.ItemOrdenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemOrdenPayload>[]
          }
          create: {
            args: Prisma.ItemOrdenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemOrdenPayload>
          }
          createMany: {
            args: Prisma.ItemOrdenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ItemOrdenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemOrdenPayload>[]
          }
          delete: {
            args: Prisma.ItemOrdenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemOrdenPayload>
          }
          update: {
            args: Prisma.ItemOrdenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemOrdenPayload>
          }
          deleteMany: {
            args: Prisma.ItemOrdenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ItemOrdenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ItemOrdenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemOrdenPayload>[]
          }
          upsert: {
            args: Prisma.ItemOrdenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemOrdenPayload>
          }
          aggregate: {
            args: Prisma.ItemOrdenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItemOrden>
          }
          groupBy: {
            args: Prisma.ItemOrdenGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItemOrdenGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItemOrdenCountArgs<ExtArgs>
            result: $Utils.Optional<ItemOrdenCountAggregateOutputType> | number
          }
        }
      }
      OrdenCompra: {
        payload: Prisma.$OrdenCompraPayload<ExtArgs>
        fields: Prisma.OrdenCompraFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrdenCompraFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenCompraPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrdenCompraFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenCompraPayload>
          }
          findFirst: {
            args: Prisma.OrdenCompraFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenCompraPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrdenCompraFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenCompraPayload>
          }
          findMany: {
            args: Prisma.OrdenCompraFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenCompraPayload>[]
          }
          create: {
            args: Prisma.OrdenCompraCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenCompraPayload>
          }
          createMany: {
            args: Prisma.OrdenCompraCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrdenCompraCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenCompraPayload>[]
          }
          delete: {
            args: Prisma.OrdenCompraDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenCompraPayload>
          }
          update: {
            args: Prisma.OrdenCompraUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenCompraPayload>
          }
          deleteMany: {
            args: Prisma.OrdenCompraDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrdenCompraUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrdenCompraUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenCompraPayload>[]
          }
          upsert: {
            args: Prisma.OrdenCompraUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenCompraPayload>
          }
          aggregate: {
            args: Prisma.OrdenCompraAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrdenCompra>
          }
          groupBy: {
            args: Prisma.OrdenCompraGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrdenCompraGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrdenCompraCountArgs<ExtArgs>
            result: $Utils.Optional<OrdenCompraCountAggregateOutputType> | number
          }
        }
      }
      Precio: {
        payload: Prisma.$PrecioPayload<ExtArgs>
        fields: Prisma.PrecioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PrecioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrecioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PrecioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrecioPayload>
          }
          findFirst: {
            args: Prisma.PrecioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrecioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PrecioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrecioPayload>
          }
          findMany: {
            args: Prisma.PrecioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrecioPayload>[]
          }
          create: {
            args: Prisma.PrecioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrecioPayload>
          }
          createMany: {
            args: Prisma.PrecioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PrecioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrecioPayload>[]
          }
          delete: {
            args: Prisma.PrecioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrecioPayload>
          }
          update: {
            args: Prisma.PrecioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrecioPayload>
          }
          deleteMany: {
            args: Prisma.PrecioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PrecioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PrecioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrecioPayload>[]
          }
          upsert: {
            args: Prisma.PrecioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrecioPayload>
          }
          aggregate: {
            args: Prisma.PrecioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrecio>
          }
          groupBy: {
            args: Prisma.PrecioGroupByArgs<ExtArgs>
            result: $Utils.Optional<PrecioGroupByOutputType>[]
          }
          count: {
            args: Prisma.PrecioCountArgs<ExtArgs>
            result: $Utils.Optional<PrecioCountAggregateOutputType> | number
          }
        }
      }
      Producto: {
        payload: Prisma.$ProductoPayload<ExtArgs>
        fields: Prisma.ProductoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          findFirst: {
            args: Prisma.ProductoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          findMany: {
            args: Prisma.ProductoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>[]
          }
          create: {
            args: Prisma.ProductoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          createMany: {
            args: Prisma.ProductoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>[]
          }
          delete: {
            args: Prisma.ProductoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          update: {
            args: Prisma.ProductoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          deleteMany: {
            args: Prisma.ProductoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>[]
          }
          upsert: {
            args: Prisma.ProductoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          aggregate: {
            args: Prisma.ProductoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProducto>
          }
          groupBy: {
            args: Prisma.ProductoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductoCountArgs<ExtArgs>
            result: $Utils.Optional<ProductoCountAggregateOutputType> | number
          }
        }
      }
      Talle: {
        payload: Prisma.$TallePayload<ExtArgs>
        fields: Prisma.TalleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TalleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TallePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TalleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TallePayload>
          }
          findFirst: {
            args: Prisma.TalleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TallePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TalleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TallePayload>
          }
          findMany: {
            args: Prisma.TalleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TallePayload>[]
          }
          create: {
            args: Prisma.TalleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TallePayload>
          }
          createMany: {
            args: Prisma.TalleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TalleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TallePayload>[]
          }
          delete: {
            args: Prisma.TalleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TallePayload>
          }
          update: {
            args: Prisma.TalleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TallePayload>
          }
          deleteMany: {
            args: Prisma.TalleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TalleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TalleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TallePayload>[]
          }
          upsert: {
            args: Prisma.TalleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TallePayload>
          }
          aggregate: {
            args: Prisma.TalleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTalle>
          }
          groupBy: {
            args: Prisma.TalleGroupByArgs<ExtArgs>
            result: $Utils.Optional<TalleGroupByOutputType>[]
          }
          count: {
            args: Prisma.TalleCountArgs<ExtArgs>
            result: $Utils.Optional<TalleCountAggregateOutputType> | number
          }
        }
      }
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      UsuarioDireccion: {
        payload: Prisma.$UsuarioDireccionPayload<ExtArgs>
        fields: Prisma.UsuarioDireccionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioDireccionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioDireccionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioDireccionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioDireccionPayload>
          }
          findFirst: {
            args: Prisma.UsuarioDireccionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioDireccionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioDireccionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioDireccionPayload>
          }
          findMany: {
            args: Prisma.UsuarioDireccionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioDireccionPayload>[]
          }
          create: {
            args: Prisma.UsuarioDireccionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioDireccionPayload>
          }
          createMany: {
            args: Prisma.UsuarioDireccionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioDireccionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioDireccionPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDireccionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioDireccionPayload>
          }
          update: {
            args: Prisma.UsuarioDireccionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioDireccionPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDireccionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioDireccionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioDireccionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioDireccionPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioDireccionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioDireccionPayload>
          }
          aggregate: {
            args: Prisma.UsuarioDireccionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuarioDireccion>
          }
          groupBy: {
            args: Prisma.UsuarioDireccionGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioDireccionGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioDireccionCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioDireccionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    categoria?: CategoriaOmit
    descuento?: DescuentoOmit
    detalle?: DetalleOmit
    direccion?: DireccionOmit
    img?: ImgOmit
    itemOrden?: ItemOrdenOmit
    ordenCompra?: OrdenCompraOmit
    precio?: PrecioOmit
    producto?: ProductoOmit
    talle?: TalleOmit
    usuario?: UsuarioOmit
    usuarioDireccion?: UsuarioDireccionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CategoriaCountOutputType
   */

  export type CategoriaCountOutputType = {
    productos: number
  }

  export type CategoriaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productos?: boolean | CategoriaCountOutputTypeCountProductosArgs
  }

  // Custom InputTypes
  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriaCountOutputType
     */
    select?: CategoriaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeCountProductosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductoWhereInput
  }


  /**
   * Count Type DescuentoCountOutputType
   */

  export type DescuentoCountOutputType = {
    precios: number
  }

  export type DescuentoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    precios?: boolean | DescuentoCountOutputTypeCountPreciosArgs
  }

  // Custom InputTypes
  /**
   * DescuentoCountOutputType without action
   */
  export type DescuentoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DescuentoCountOutputType
     */
    select?: DescuentoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DescuentoCountOutputType without action
   */
  export type DescuentoCountOutputTypeCountPreciosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrecioWhereInput
  }


  /**
   * Count Type DetalleCountOutputType
   */

  export type DetalleCountOutputType = {
    imgs: number
    precios: number
  }

  export type DetalleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    imgs?: boolean | DetalleCountOutputTypeCountImgsArgs
    precios?: boolean | DetalleCountOutputTypeCountPreciosArgs
  }

  // Custom InputTypes
  /**
   * DetalleCountOutputType without action
   */
  export type DetalleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleCountOutputType
     */
    select?: DetalleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DetalleCountOutputType without action
   */
  export type DetalleCountOutputTypeCountImgsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImgWhereInput
  }

  /**
   * DetalleCountOutputType without action
   */
  export type DetalleCountOutputTypeCountPreciosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrecioWhereInput
  }


  /**
   * Count Type DireccionCountOutputType
   */

  export type DireccionCountOutputType = {
    usuarios: number
  }

  export type DireccionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | DireccionCountOutputTypeCountUsuariosArgs
  }

  // Custom InputTypes
  /**
   * DireccionCountOutputType without action
   */
  export type DireccionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DireccionCountOutputType
     */
    select?: DireccionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DireccionCountOutputType without action
   */
  export type DireccionCountOutputTypeCountUsuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioDireccionWhereInput
  }


  /**
   * Count Type OrdenCompraCountOutputType
   */

  export type OrdenCompraCountOutputType = {
    items: number
  }

  export type OrdenCompraCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | OrdenCompraCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * OrdenCompraCountOutputType without action
   */
  export type OrdenCompraCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdenCompraCountOutputType
     */
    select?: OrdenCompraCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrdenCompraCountOutputType without action
   */
  export type OrdenCompraCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemOrdenWhereInput
  }


  /**
   * Count Type ProductoCountOutputType
   */

  export type ProductoCountOutputType = {
    detalles: number
    itemsOrden: number
  }

  export type ProductoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    detalles?: boolean | ProductoCountOutputTypeCountDetallesArgs
    itemsOrden?: boolean | ProductoCountOutputTypeCountItemsOrdenArgs
  }

  // Custom InputTypes
  /**
   * ProductoCountOutputType without action
   */
  export type ProductoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoCountOutputType
     */
    select?: ProductoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductoCountOutputType without action
   */
  export type ProductoCountOutputTypeCountDetallesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DetalleWhereInput
  }

  /**
   * ProductoCountOutputType without action
   */
  export type ProductoCountOutputTypeCountItemsOrdenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemOrdenWhereInput
  }


  /**
   * Count Type TalleCountOutputType
   */

  export type TalleCountOutputType = {
    detalles: number
  }

  export type TalleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    detalles?: boolean | TalleCountOutputTypeCountDetallesArgs
  }

  // Custom InputTypes
  /**
   * TalleCountOutputType without action
   */
  export type TalleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TalleCountOutputType
     */
    select?: TalleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TalleCountOutputType without action
   */
  export type TalleCountOutputTypeCountDetallesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DetalleWhereInput
  }


  /**
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    direcciones: number
    ordenes: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    direcciones?: boolean | UsuarioCountOutputTypeCountDireccionesArgs
    ordenes?: boolean | UsuarioCountOutputTypeCountOrdenesArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountDireccionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioDireccionWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountOrdenesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdenCompraWhereInput
  }


  /**
   * Count Type UsuarioDireccionCountOutputType
   */

  export type UsuarioDireccionCountOutputType = {
    ordenesEnvio: number
  }

  export type UsuarioDireccionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ordenesEnvio?: boolean | UsuarioDireccionCountOutputTypeCountOrdenesEnvioArgs
  }

  // Custom InputTypes
  /**
   * UsuarioDireccionCountOutputType without action
   */
  export type UsuarioDireccionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioDireccionCountOutputType
     */
    select?: UsuarioDireccionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioDireccionCountOutputType without action
   */
  export type UsuarioDireccionCountOutputTypeCountOrdenesEnvioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdenCompraWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Categoria
   */

  export type AggregateCategoria = {
    _count: CategoriaCountAggregateOutputType | null
    _avg: CategoriaAvgAggregateOutputType | null
    _sum: CategoriaSumAggregateOutputType | null
    _min: CategoriaMinAggregateOutputType | null
    _max: CategoriaMaxAggregateOutputType | null
  }

  export type CategoriaAvgAggregateOutputType = {
    id: number | null
  }

  export type CategoriaSumAggregateOutputType = {
    id: number | null
  }

  export type CategoriaMinAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type CategoriaMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type CategoriaCountAggregateOutputType = {
    id: number
    nombre: number
    _all: number
  }


  export type CategoriaAvgAggregateInputType = {
    id?: true
  }

  export type CategoriaSumAggregateInputType = {
    id?: true
  }

  export type CategoriaMinAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type CategoriaMaxAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type CategoriaCountAggregateInputType = {
    id?: true
    nombre?: true
    _all?: true
  }

  export type CategoriaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categoria to aggregate.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categorias
    **/
    _count?: true | CategoriaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriaMaxAggregateInputType
  }

  export type GetCategoriaAggregateType<T extends CategoriaAggregateArgs> = {
        [P in keyof T & keyof AggregateCategoria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategoria[P]>
      : GetScalarType<T[P], AggregateCategoria[P]>
  }




  export type CategoriaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoriaWhereInput
    orderBy?: CategoriaOrderByWithAggregationInput | CategoriaOrderByWithAggregationInput[]
    by: CategoriaScalarFieldEnum[] | CategoriaScalarFieldEnum
    having?: CategoriaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriaCountAggregateInputType | true
    _avg?: CategoriaAvgAggregateInputType
    _sum?: CategoriaSumAggregateInputType
    _min?: CategoriaMinAggregateInputType
    _max?: CategoriaMaxAggregateInputType
  }

  export type CategoriaGroupByOutputType = {
    id: number
    nombre: string
    _count: CategoriaCountAggregateOutputType | null
    _avg: CategoriaAvgAggregateOutputType | null
    _sum: CategoriaSumAggregateOutputType | null
    _min: CategoriaMinAggregateOutputType | null
    _max: CategoriaMaxAggregateOutputType | null
  }

  type GetCategoriaGroupByPayload<T extends CategoriaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriaGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriaGroupByOutputType[P]>
        }
      >
    >


  export type CategoriaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    productos?: boolean | Categoria$productosArgs<ExtArgs>
    _count?: boolean | CategoriaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categoria"]>

  export type CategoriaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["categoria"]>

  export type CategoriaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["categoria"]>

  export type CategoriaSelectScalar = {
    id?: boolean
    nombre?: boolean
  }

  export type CategoriaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre", ExtArgs["result"]["categoria"]>
  export type CategoriaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productos?: boolean | Categoria$productosArgs<ExtArgs>
    _count?: boolean | CategoriaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoriaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoriaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoriaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Categoria"
    objects: {
      productos: Prisma.$ProductoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
    }, ExtArgs["result"]["categoria"]>
    composites: {}
  }

  type CategoriaGetPayload<S extends boolean | null | undefined | CategoriaDefaultArgs> = $Result.GetResult<Prisma.$CategoriaPayload, S>

  type CategoriaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoriaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriaCountAggregateInputType | true
    }

  export interface CategoriaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Categoria'], meta: { name: 'Categoria' } }
    /**
     * Find zero or one Categoria that matches the filter.
     * @param {CategoriaFindUniqueArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoriaFindUniqueArgs>(args: SelectSubset<T, CategoriaFindUniqueArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categoria that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoriaFindUniqueOrThrowArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoriaFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoriaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categoria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindFirstArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoriaFindFirstArgs>(args?: SelectSubset<T, CategoriaFindFirstArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categoria that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindFirstOrThrowArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoriaFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoriaFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categorias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categorias
     * const categorias = await prisma.categoria.findMany()
     * 
     * // Get first 10 Categorias
     * const categorias = await prisma.categoria.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoriaWithIdOnly = await prisma.categoria.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoriaFindManyArgs>(args?: SelectSubset<T, CategoriaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categoria.
     * @param {CategoriaCreateArgs} args - Arguments to create a Categoria.
     * @example
     * // Create one Categoria
     * const Categoria = await prisma.categoria.create({
     *   data: {
     *     // ... data to create a Categoria
     *   }
     * })
     * 
     */
    create<T extends CategoriaCreateArgs>(args: SelectSubset<T, CategoriaCreateArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categorias.
     * @param {CategoriaCreateManyArgs} args - Arguments to create many Categorias.
     * @example
     * // Create many Categorias
     * const categoria = await prisma.categoria.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoriaCreateManyArgs>(args?: SelectSubset<T, CategoriaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categorias and returns the data saved in the database.
     * @param {CategoriaCreateManyAndReturnArgs} args - Arguments to create many Categorias.
     * @example
     * // Create many Categorias
     * const categoria = await prisma.categoria.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categorias and only return the `id`
     * const categoriaWithIdOnly = await prisma.categoria.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoriaCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoriaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Categoria.
     * @param {CategoriaDeleteArgs} args - Arguments to delete one Categoria.
     * @example
     * // Delete one Categoria
     * const Categoria = await prisma.categoria.delete({
     *   where: {
     *     // ... filter to delete one Categoria
     *   }
     * })
     * 
     */
    delete<T extends CategoriaDeleteArgs>(args: SelectSubset<T, CategoriaDeleteArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categoria.
     * @param {CategoriaUpdateArgs} args - Arguments to update one Categoria.
     * @example
     * // Update one Categoria
     * const categoria = await prisma.categoria.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoriaUpdateArgs>(args: SelectSubset<T, CategoriaUpdateArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categorias.
     * @param {CategoriaDeleteManyArgs} args - Arguments to filter Categorias to delete.
     * @example
     * // Delete a few Categorias
     * const { count } = await prisma.categoria.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoriaDeleteManyArgs>(args?: SelectSubset<T, CategoriaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categorias
     * const categoria = await prisma.categoria.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoriaUpdateManyArgs>(args: SelectSubset<T, CategoriaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorias and returns the data updated in the database.
     * @param {CategoriaUpdateManyAndReturnArgs} args - Arguments to update many Categorias.
     * @example
     * // Update many Categorias
     * const categoria = await prisma.categoria.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categorias and only return the `id`
     * const categoriaWithIdOnly = await prisma.categoria.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategoriaUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoriaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Categoria.
     * @param {CategoriaUpsertArgs} args - Arguments to update or create a Categoria.
     * @example
     * // Update or create a Categoria
     * const categoria = await prisma.categoria.upsert({
     *   create: {
     *     // ... data to create a Categoria
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categoria we want to update
     *   }
     * })
     */
    upsert<T extends CategoriaUpsertArgs>(args: SelectSubset<T, CategoriaUpsertArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaCountArgs} args - Arguments to filter Categorias to count.
     * @example
     * // Count the number of Categorias
     * const count = await prisma.categoria.count({
     *   where: {
     *     // ... the filter for the Categorias we want to count
     *   }
     * })
    **/
    count<T extends CategoriaCountArgs>(
      args?: Subset<T, CategoriaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoriaAggregateArgs>(args: Subset<T, CategoriaAggregateArgs>): Prisma.PrismaPromise<GetCategoriaAggregateType<T>>

    /**
     * Group by Categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoriaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoriaGroupByArgs['orderBy'] }
        : { orderBy?: CategoriaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoriaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Categoria model
   */
  readonly fields: CategoriaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Categoria.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoriaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    productos<T extends Categoria$productosArgs<ExtArgs> = {}>(args?: Subset<T, Categoria$productosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Categoria model
   */
  interface CategoriaFieldRefs {
    readonly id: FieldRef<"Categoria", 'Int'>
    readonly nombre: FieldRef<"Categoria", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Categoria findUnique
   */
  export type CategoriaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria findUniqueOrThrow
   */
  export type CategoriaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria findFirst
   */
  export type CategoriaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria findFirstOrThrow
   */
  export type CategoriaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria findMany
   */
  export type CategoriaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categorias to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria create
   */
  export type CategoriaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The data needed to create a Categoria.
     */
    data: XOR<CategoriaCreateInput, CategoriaUncheckedCreateInput>
  }

  /**
   * Categoria createMany
   */
  export type CategoriaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categorias.
     */
    data: CategoriaCreateManyInput | CategoriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categoria createManyAndReturn
   */
  export type CategoriaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * The data used to create many Categorias.
     */
    data: CategoriaCreateManyInput | CategoriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categoria update
   */
  export type CategoriaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The data needed to update a Categoria.
     */
    data: XOR<CategoriaUpdateInput, CategoriaUncheckedUpdateInput>
    /**
     * Choose, which Categoria to update.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria updateMany
   */
  export type CategoriaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categorias.
     */
    data: XOR<CategoriaUpdateManyMutationInput, CategoriaUncheckedUpdateManyInput>
    /**
     * Filter which Categorias to update
     */
    where?: CategoriaWhereInput
    /**
     * Limit how many Categorias to update.
     */
    limit?: number
  }

  /**
   * Categoria updateManyAndReturn
   */
  export type CategoriaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * The data used to update Categorias.
     */
    data: XOR<CategoriaUpdateManyMutationInput, CategoriaUncheckedUpdateManyInput>
    /**
     * Filter which Categorias to update
     */
    where?: CategoriaWhereInput
    /**
     * Limit how many Categorias to update.
     */
    limit?: number
  }

  /**
   * Categoria upsert
   */
  export type CategoriaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The filter to search for the Categoria to update in case it exists.
     */
    where: CategoriaWhereUniqueInput
    /**
     * In case the Categoria found by the `where` argument doesn't exist, create a new Categoria with this data.
     */
    create: XOR<CategoriaCreateInput, CategoriaUncheckedCreateInput>
    /**
     * In case the Categoria was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoriaUpdateInput, CategoriaUncheckedUpdateInput>
  }

  /**
   * Categoria delete
   */
  export type CategoriaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter which Categoria to delete.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria deleteMany
   */
  export type CategoriaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categorias to delete
     */
    where?: CategoriaWhereInput
    /**
     * Limit how many Categorias to delete.
     */
    limit?: number
  }

  /**
   * Categoria.productos
   */
  export type Categoria$productosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    where?: ProductoWhereInput
    orderBy?: ProductoOrderByWithRelationInput | ProductoOrderByWithRelationInput[]
    cursor?: ProductoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductoScalarFieldEnum | ProductoScalarFieldEnum[]
  }

  /**
   * Categoria without action
   */
  export type CategoriaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
  }


  /**
   * Model Descuento
   */

  export type AggregateDescuento = {
    _count: DescuentoCountAggregateOutputType | null
    _avg: DescuentoAvgAggregateOutputType | null
    _sum: DescuentoSumAggregateOutputType | null
    _min: DescuentoMinAggregateOutputType | null
    _max: DescuentoMaxAggregateOutputType | null
  }

  export type DescuentoAvgAggregateOutputType = {
    id: number | null
    porcentaje: number | null
  }

  export type DescuentoSumAggregateOutputType = {
    id: number | null
    porcentaje: number | null
  }

  export type DescuentoMinAggregateOutputType = {
    id: number | null
    porcentaje: number | null
    fechaInicio: Date | null
    fechaFin: Date | null
  }

  export type DescuentoMaxAggregateOutputType = {
    id: number | null
    porcentaje: number | null
    fechaInicio: Date | null
    fechaFin: Date | null
  }

  export type DescuentoCountAggregateOutputType = {
    id: number
    porcentaje: number
    fechaInicio: number
    fechaFin: number
    _all: number
  }


  export type DescuentoAvgAggregateInputType = {
    id?: true
    porcentaje?: true
  }

  export type DescuentoSumAggregateInputType = {
    id?: true
    porcentaje?: true
  }

  export type DescuentoMinAggregateInputType = {
    id?: true
    porcentaje?: true
    fechaInicio?: true
    fechaFin?: true
  }

  export type DescuentoMaxAggregateInputType = {
    id?: true
    porcentaje?: true
    fechaInicio?: true
    fechaFin?: true
  }

  export type DescuentoCountAggregateInputType = {
    id?: true
    porcentaje?: true
    fechaInicio?: true
    fechaFin?: true
    _all?: true
  }

  export type DescuentoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Descuento to aggregate.
     */
    where?: DescuentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Descuentos to fetch.
     */
    orderBy?: DescuentoOrderByWithRelationInput | DescuentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DescuentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Descuentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Descuentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Descuentos
    **/
    _count?: true | DescuentoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DescuentoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DescuentoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DescuentoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DescuentoMaxAggregateInputType
  }

  export type GetDescuentoAggregateType<T extends DescuentoAggregateArgs> = {
        [P in keyof T & keyof AggregateDescuento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDescuento[P]>
      : GetScalarType<T[P], AggregateDescuento[P]>
  }




  export type DescuentoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DescuentoWhereInput
    orderBy?: DescuentoOrderByWithAggregationInput | DescuentoOrderByWithAggregationInput[]
    by: DescuentoScalarFieldEnum[] | DescuentoScalarFieldEnum
    having?: DescuentoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DescuentoCountAggregateInputType | true
    _avg?: DescuentoAvgAggregateInputType
    _sum?: DescuentoSumAggregateInputType
    _min?: DescuentoMinAggregateInputType
    _max?: DescuentoMaxAggregateInputType
  }

  export type DescuentoGroupByOutputType = {
    id: number
    porcentaje: number
    fechaInicio: Date
    fechaFin: Date
    _count: DescuentoCountAggregateOutputType | null
    _avg: DescuentoAvgAggregateOutputType | null
    _sum: DescuentoSumAggregateOutputType | null
    _min: DescuentoMinAggregateOutputType | null
    _max: DescuentoMaxAggregateOutputType | null
  }

  type GetDescuentoGroupByPayload<T extends DescuentoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DescuentoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DescuentoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DescuentoGroupByOutputType[P]>
            : GetScalarType<T[P], DescuentoGroupByOutputType[P]>
        }
      >
    >


  export type DescuentoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    porcentaje?: boolean
    fechaInicio?: boolean
    fechaFin?: boolean
    precios?: boolean | Descuento$preciosArgs<ExtArgs>
    _count?: boolean | DescuentoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["descuento"]>

  export type DescuentoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    porcentaje?: boolean
    fechaInicio?: boolean
    fechaFin?: boolean
  }, ExtArgs["result"]["descuento"]>

  export type DescuentoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    porcentaje?: boolean
    fechaInicio?: boolean
    fechaFin?: boolean
  }, ExtArgs["result"]["descuento"]>

  export type DescuentoSelectScalar = {
    id?: boolean
    porcentaje?: boolean
    fechaInicio?: boolean
    fechaFin?: boolean
  }

  export type DescuentoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "porcentaje" | "fechaInicio" | "fechaFin", ExtArgs["result"]["descuento"]>
  export type DescuentoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    precios?: boolean | Descuento$preciosArgs<ExtArgs>
    _count?: boolean | DescuentoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DescuentoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DescuentoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DescuentoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Descuento"
    objects: {
      precios: Prisma.$PrecioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      porcentaje: number
      fechaInicio: Date
      fechaFin: Date
    }, ExtArgs["result"]["descuento"]>
    composites: {}
  }

  type DescuentoGetPayload<S extends boolean | null | undefined | DescuentoDefaultArgs> = $Result.GetResult<Prisma.$DescuentoPayload, S>

  type DescuentoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DescuentoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DescuentoCountAggregateInputType | true
    }

  export interface DescuentoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Descuento'], meta: { name: 'Descuento' } }
    /**
     * Find zero or one Descuento that matches the filter.
     * @param {DescuentoFindUniqueArgs} args - Arguments to find a Descuento
     * @example
     * // Get one Descuento
     * const descuento = await prisma.descuento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DescuentoFindUniqueArgs>(args: SelectSubset<T, DescuentoFindUniqueArgs<ExtArgs>>): Prisma__DescuentoClient<$Result.GetResult<Prisma.$DescuentoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Descuento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DescuentoFindUniqueOrThrowArgs} args - Arguments to find a Descuento
     * @example
     * // Get one Descuento
     * const descuento = await prisma.descuento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DescuentoFindUniqueOrThrowArgs>(args: SelectSubset<T, DescuentoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DescuentoClient<$Result.GetResult<Prisma.$DescuentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Descuento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DescuentoFindFirstArgs} args - Arguments to find a Descuento
     * @example
     * // Get one Descuento
     * const descuento = await prisma.descuento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DescuentoFindFirstArgs>(args?: SelectSubset<T, DescuentoFindFirstArgs<ExtArgs>>): Prisma__DescuentoClient<$Result.GetResult<Prisma.$DescuentoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Descuento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DescuentoFindFirstOrThrowArgs} args - Arguments to find a Descuento
     * @example
     * // Get one Descuento
     * const descuento = await prisma.descuento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DescuentoFindFirstOrThrowArgs>(args?: SelectSubset<T, DescuentoFindFirstOrThrowArgs<ExtArgs>>): Prisma__DescuentoClient<$Result.GetResult<Prisma.$DescuentoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Descuentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DescuentoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Descuentos
     * const descuentos = await prisma.descuento.findMany()
     * 
     * // Get first 10 Descuentos
     * const descuentos = await prisma.descuento.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const descuentoWithIdOnly = await prisma.descuento.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DescuentoFindManyArgs>(args?: SelectSubset<T, DescuentoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DescuentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Descuento.
     * @param {DescuentoCreateArgs} args - Arguments to create a Descuento.
     * @example
     * // Create one Descuento
     * const Descuento = await prisma.descuento.create({
     *   data: {
     *     // ... data to create a Descuento
     *   }
     * })
     * 
     */
    create<T extends DescuentoCreateArgs>(args: SelectSubset<T, DescuentoCreateArgs<ExtArgs>>): Prisma__DescuentoClient<$Result.GetResult<Prisma.$DescuentoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Descuentos.
     * @param {DescuentoCreateManyArgs} args - Arguments to create many Descuentos.
     * @example
     * // Create many Descuentos
     * const descuento = await prisma.descuento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DescuentoCreateManyArgs>(args?: SelectSubset<T, DescuentoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Descuentos and returns the data saved in the database.
     * @param {DescuentoCreateManyAndReturnArgs} args - Arguments to create many Descuentos.
     * @example
     * // Create many Descuentos
     * const descuento = await prisma.descuento.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Descuentos and only return the `id`
     * const descuentoWithIdOnly = await prisma.descuento.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DescuentoCreateManyAndReturnArgs>(args?: SelectSubset<T, DescuentoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DescuentoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Descuento.
     * @param {DescuentoDeleteArgs} args - Arguments to delete one Descuento.
     * @example
     * // Delete one Descuento
     * const Descuento = await prisma.descuento.delete({
     *   where: {
     *     // ... filter to delete one Descuento
     *   }
     * })
     * 
     */
    delete<T extends DescuentoDeleteArgs>(args: SelectSubset<T, DescuentoDeleteArgs<ExtArgs>>): Prisma__DescuentoClient<$Result.GetResult<Prisma.$DescuentoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Descuento.
     * @param {DescuentoUpdateArgs} args - Arguments to update one Descuento.
     * @example
     * // Update one Descuento
     * const descuento = await prisma.descuento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DescuentoUpdateArgs>(args: SelectSubset<T, DescuentoUpdateArgs<ExtArgs>>): Prisma__DescuentoClient<$Result.GetResult<Prisma.$DescuentoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Descuentos.
     * @param {DescuentoDeleteManyArgs} args - Arguments to filter Descuentos to delete.
     * @example
     * // Delete a few Descuentos
     * const { count } = await prisma.descuento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DescuentoDeleteManyArgs>(args?: SelectSubset<T, DescuentoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Descuentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DescuentoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Descuentos
     * const descuento = await prisma.descuento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DescuentoUpdateManyArgs>(args: SelectSubset<T, DescuentoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Descuentos and returns the data updated in the database.
     * @param {DescuentoUpdateManyAndReturnArgs} args - Arguments to update many Descuentos.
     * @example
     * // Update many Descuentos
     * const descuento = await prisma.descuento.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Descuentos and only return the `id`
     * const descuentoWithIdOnly = await prisma.descuento.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DescuentoUpdateManyAndReturnArgs>(args: SelectSubset<T, DescuentoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DescuentoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Descuento.
     * @param {DescuentoUpsertArgs} args - Arguments to update or create a Descuento.
     * @example
     * // Update or create a Descuento
     * const descuento = await prisma.descuento.upsert({
     *   create: {
     *     // ... data to create a Descuento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Descuento we want to update
     *   }
     * })
     */
    upsert<T extends DescuentoUpsertArgs>(args: SelectSubset<T, DescuentoUpsertArgs<ExtArgs>>): Prisma__DescuentoClient<$Result.GetResult<Prisma.$DescuentoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Descuentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DescuentoCountArgs} args - Arguments to filter Descuentos to count.
     * @example
     * // Count the number of Descuentos
     * const count = await prisma.descuento.count({
     *   where: {
     *     // ... the filter for the Descuentos we want to count
     *   }
     * })
    **/
    count<T extends DescuentoCountArgs>(
      args?: Subset<T, DescuentoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DescuentoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Descuento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DescuentoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DescuentoAggregateArgs>(args: Subset<T, DescuentoAggregateArgs>): Prisma.PrismaPromise<GetDescuentoAggregateType<T>>

    /**
     * Group by Descuento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DescuentoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DescuentoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DescuentoGroupByArgs['orderBy'] }
        : { orderBy?: DescuentoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DescuentoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDescuentoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Descuento model
   */
  readonly fields: DescuentoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Descuento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DescuentoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    precios<T extends Descuento$preciosArgs<ExtArgs> = {}>(args?: Subset<T, Descuento$preciosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrecioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Descuento model
   */
  interface DescuentoFieldRefs {
    readonly id: FieldRef<"Descuento", 'Int'>
    readonly porcentaje: FieldRef<"Descuento", 'Float'>
    readonly fechaInicio: FieldRef<"Descuento", 'DateTime'>
    readonly fechaFin: FieldRef<"Descuento", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Descuento findUnique
   */
  export type DescuentoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Descuento
     */
    select?: DescuentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Descuento
     */
    omit?: DescuentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DescuentoInclude<ExtArgs> | null
    /**
     * Filter, which Descuento to fetch.
     */
    where: DescuentoWhereUniqueInput
  }

  /**
   * Descuento findUniqueOrThrow
   */
  export type DescuentoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Descuento
     */
    select?: DescuentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Descuento
     */
    omit?: DescuentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DescuentoInclude<ExtArgs> | null
    /**
     * Filter, which Descuento to fetch.
     */
    where: DescuentoWhereUniqueInput
  }

  /**
   * Descuento findFirst
   */
  export type DescuentoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Descuento
     */
    select?: DescuentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Descuento
     */
    omit?: DescuentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DescuentoInclude<ExtArgs> | null
    /**
     * Filter, which Descuento to fetch.
     */
    where?: DescuentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Descuentos to fetch.
     */
    orderBy?: DescuentoOrderByWithRelationInput | DescuentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Descuentos.
     */
    cursor?: DescuentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Descuentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Descuentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Descuentos.
     */
    distinct?: DescuentoScalarFieldEnum | DescuentoScalarFieldEnum[]
  }

  /**
   * Descuento findFirstOrThrow
   */
  export type DescuentoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Descuento
     */
    select?: DescuentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Descuento
     */
    omit?: DescuentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DescuentoInclude<ExtArgs> | null
    /**
     * Filter, which Descuento to fetch.
     */
    where?: DescuentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Descuentos to fetch.
     */
    orderBy?: DescuentoOrderByWithRelationInput | DescuentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Descuentos.
     */
    cursor?: DescuentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Descuentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Descuentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Descuentos.
     */
    distinct?: DescuentoScalarFieldEnum | DescuentoScalarFieldEnum[]
  }

  /**
   * Descuento findMany
   */
  export type DescuentoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Descuento
     */
    select?: DescuentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Descuento
     */
    omit?: DescuentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DescuentoInclude<ExtArgs> | null
    /**
     * Filter, which Descuentos to fetch.
     */
    where?: DescuentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Descuentos to fetch.
     */
    orderBy?: DescuentoOrderByWithRelationInput | DescuentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Descuentos.
     */
    cursor?: DescuentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Descuentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Descuentos.
     */
    skip?: number
    distinct?: DescuentoScalarFieldEnum | DescuentoScalarFieldEnum[]
  }

  /**
   * Descuento create
   */
  export type DescuentoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Descuento
     */
    select?: DescuentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Descuento
     */
    omit?: DescuentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DescuentoInclude<ExtArgs> | null
    /**
     * The data needed to create a Descuento.
     */
    data: XOR<DescuentoCreateInput, DescuentoUncheckedCreateInput>
  }

  /**
   * Descuento createMany
   */
  export type DescuentoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Descuentos.
     */
    data: DescuentoCreateManyInput | DescuentoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Descuento createManyAndReturn
   */
  export type DescuentoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Descuento
     */
    select?: DescuentoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Descuento
     */
    omit?: DescuentoOmit<ExtArgs> | null
    /**
     * The data used to create many Descuentos.
     */
    data: DescuentoCreateManyInput | DescuentoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Descuento update
   */
  export type DescuentoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Descuento
     */
    select?: DescuentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Descuento
     */
    omit?: DescuentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DescuentoInclude<ExtArgs> | null
    /**
     * The data needed to update a Descuento.
     */
    data: XOR<DescuentoUpdateInput, DescuentoUncheckedUpdateInput>
    /**
     * Choose, which Descuento to update.
     */
    where: DescuentoWhereUniqueInput
  }

  /**
   * Descuento updateMany
   */
  export type DescuentoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Descuentos.
     */
    data: XOR<DescuentoUpdateManyMutationInput, DescuentoUncheckedUpdateManyInput>
    /**
     * Filter which Descuentos to update
     */
    where?: DescuentoWhereInput
    /**
     * Limit how many Descuentos to update.
     */
    limit?: number
  }

  /**
   * Descuento updateManyAndReturn
   */
  export type DescuentoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Descuento
     */
    select?: DescuentoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Descuento
     */
    omit?: DescuentoOmit<ExtArgs> | null
    /**
     * The data used to update Descuentos.
     */
    data: XOR<DescuentoUpdateManyMutationInput, DescuentoUncheckedUpdateManyInput>
    /**
     * Filter which Descuentos to update
     */
    where?: DescuentoWhereInput
    /**
     * Limit how many Descuentos to update.
     */
    limit?: number
  }

  /**
   * Descuento upsert
   */
  export type DescuentoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Descuento
     */
    select?: DescuentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Descuento
     */
    omit?: DescuentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DescuentoInclude<ExtArgs> | null
    /**
     * The filter to search for the Descuento to update in case it exists.
     */
    where: DescuentoWhereUniqueInput
    /**
     * In case the Descuento found by the `where` argument doesn't exist, create a new Descuento with this data.
     */
    create: XOR<DescuentoCreateInput, DescuentoUncheckedCreateInput>
    /**
     * In case the Descuento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DescuentoUpdateInput, DescuentoUncheckedUpdateInput>
  }

  /**
   * Descuento delete
   */
  export type DescuentoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Descuento
     */
    select?: DescuentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Descuento
     */
    omit?: DescuentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DescuentoInclude<ExtArgs> | null
    /**
     * Filter which Descuento to delete.
     */
    where: DescuentoWhereUniqueInput
  }

  /**
   * Descuento deleteMany
   */
  export type DescuentoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Descuentos to delete
     */
    where?: DescuentoWhereInput
    /**
     * Limit how many Descuentos to delete.
     */
    limit?: number
  }

  /**
   * Descuento.precios
   */
  export type Descuento$preciosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Precio
     */
    select?: PrecioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Precio
     */
    omit?: PrecioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrecioInclude<ExtArgs> | null
    where?: PrecioWhereInput
    orderBy?: PrecioOrderByWithRelationInput | PrecioOrderByWithRelationInput[]
    cursor?: PrecioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PrecioScalarFieldEnum | PrecioScalarFieldEnum[]
  }

  /**
   * Descuento without action
   */
  export type DescuentoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Descuento
     */
    select?: DescuentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Descuento
     */
    omit?: DescuentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DescuentoInclude<ExtArgs> | null
  }


  /**
   * Model Detalle
   */

  export type AggregateDetalle = {
    _count: DetalleCountAggregateOutputType | null
    _avg: DetalleAvgAggregateOutputType | null
    _sum: DetalleSumAggregateOutputType | null
    _min: DetalleMinAggregateOutputType | null
    _max: DetalleMaxAggregateOutputType | null
  }

  export type DetalleAvgAggregateOutputType = {
    id: number | null
    stock: number | null
    productoId: number | null
    talleId: number | null
  }

  export type DetalleSumAggregateOutputType = {
    id: number | null
    stock: number | null
    productoId: number | null
    talleId: number | null
  }

  export type DetalleMinAggregateOutputType = {
    id: number | null
    color: string | null
    estado: string | null
    stock: number | null
    productoId: number | null
    talleId: number | null
  }

  export type DetalleMaxAggregateOutputType = {
    id: number | null
    color: string | null
    estado: string | null
    stock: number | null
    productoId: number | null
    talleId: number | null
  }

  export type DetalleCountAggregateOutputType = {
    id: number
    color: number
    estado: number
    stock: number
    productoId: number
    talleId: number
    _all: number
  }


  export type DetalleAvgAggregateInputType = {
    id?: true
    stock?: true
    productoId?: true
    talleId?: true
  }

  export type DetalleSumAggregateInputType = {
    id?: true
    stock?: true
    productoId?: true
    talleId?: true
  }

  export type DetalleMinAggregateInputType = {
    id?: true
    color?: true
    estado?: true
    stock?: true
    productoId?: true
    talleId?: true
  }

  export type DetalleMaxAggregateInputType = {
    id?: true
    color?: true
    estado?: true
    stock?: true
    productoId?: true
    talleId?: true
  }

  export type DetalleCountAggregateInputType = {
    id?: true
    color?: true
    estado?: true
    stock?: true
    productoId?: true
    talleId?: true
    _all?: true
  }

  export type DetalleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Detalle to aggregate.
     */
    where?: DetalleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Detalles to fetch.
     */
    orderBy?: DetalleOrderByWithRelationInput | DetalleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DetalleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Detalles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Detalles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Detalles
    **/
    _count?: true | DetalleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DetalleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DetalleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DetalleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DetalleMaxAggregateInputType
  }

  export type GetDetalleAggregateType<T extends DetalleAggregateArgs> = {
        [P in keyof T & keyof AggregateDetalle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDetalle[P]>
      : GetScalarType<T[P], AggregateDetalle[P]>
  }




  export type DetalleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DetalleWhereInput
    orderBy?: DetalleOrderByWithAggregationInput | DetalleOrderByWithAggregationInput[]
    by: DetalleScalarFieldEnum[] | DetalleScalarFieldEnum
    having?: DetalleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DetalleCountAggregateInputType | true
    _avg?: DetalleAvgAggregateInputType
    _sum?: DetalleSumAggregateInputType
    _min?: DetalleMinAggregateInputType
    _max?: DetalleMaxAggregateInputType
  }

  export type DetalleGroupByOutputType = {
    id: number
    color: string
    estado: string
    stock: number
    productoId: number
    talleId: number
    _count: DetalleCountAggregateOutputType | null
    _avg: DetalleAvgAggregateOutputType | null
    _sum: DetalleSumAggregateOutputType | null
    _min: DetalleMinAggregateOutputType | null
    _max: DetalleMaxAggregateOutputType | null
  }

  type GetDetalleGroupByPayload<T extends DetalleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DetalleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DetalleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DetalleGroupByOutputType[P]>
            : GetScalarType<T[P], DetalleGroupByOutputType[P]>
        }
      >
    >


  export type DetalleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    color?: boolean
    estado?: boolean
    stock?: boolean
    productoId?: boolean
    talleId?: boolean
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
    talle?: boolean | TalleDefaultArgs<ExtArgs>
    imgs?: boolean | Detalle$imgsArgs<ExtArgs>
    precios?: boolean | Detalle$preciosArgs<ExtArgs>
    _count?: boolean | DetalleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detalle"]>

  export type DetalleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    color?: boolean
    estado?: boolean
    stock?: boolean
    productoId?: boolean
    talleId?: boolean
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
    talle?: boolean | TalleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detalle"]>

  export type DetalleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    color?: boolean
    estado?: boolean
    stock?: boolean
    productoId?: boolean
    talleId?: boolean
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
    talle?: boolean | TalleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detalle"]>

  export type DetalleSelectScalar = {
    id?: boolean
    color?: boolean
    estado?: boolean
    stock?: boolean
    productoId?: boolean
    talleId?: boolean
  }

  export type DetalleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "color" | "estado" | "stock" | "productoId" | "talleId", ExtArgs["result"]["detalle"]>
  export type DetalleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
    talle?: boolean | TalleDefaultArgs<ExtArgs>
    imgs?: boolean | Detalle$imgsArgs<ExtArgs>
    precios?: boolean | Detalle$preciosArgs<ExtArgs>
    _count?: boolean | DetalleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DetalleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
    talle?: boolean | TalleDefaultArgs<ExtArgs>
  }
  export type DetalleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
    talle?: boolean | TalleDefaultArgs<ExtArgs>
  }

  export type $DetallePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Detalle"
    objects: {
      producto: Prisma.$ProductoPayload<ExtArgs>
      talle: Prisma.$TallePayload<ExtArgs>
      imgs: Prisma.$ImgPayload<ExtArgs>[]
      precios: Prisma.$PrecioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      color: string
      estado: string
      stock: number
      productoId: number
      talleId: number
    }, ExtArgs["result"]["detalle"]>
    composites: {}
  }

  type DetalleGetPayload<S extends boolean | null | undefined | DetalleDefaultArgs> = $Result.GetResult<Prisma.$DetallePayload, S>

  type DetalleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DetalleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DetalleCountAggregateInputType | true
    }

  export interface DetalleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Detalle'], meta: { name: 'Detalle' } }
    /**
     * Find zero or one Detalle that matches the filter.
     * @param {DetalleFindUniqueArgs} args - Arguments to find a Detalle
     * @example
     * // Get one Detalle
     * const detalle = await prisma.detalle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DetalleFindUniqueArgs>(args: SelectSubset<T, DetalleFindUniqueArgs<ExtArgs>>): Prisma__DetalleClient<$Result.GetResult<Prisma.$DetallePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Detalle that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DetalleFindUniqueOrThrowArgs} args - Arguments to find a Detalle
     * @example
     * // Get one Detalle
     * const detalle = await prisma.detalle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DetalleFindUniqueOrThrowArgs>(args: SelectSubset<T, DetalleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DetalleClient<$Result.GetResult<Prisma.$DetallePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Detalle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalleFindFirstArgs} args - Arguments to find a Detalle
     * @example
     * // Get one Detalle
     * const detalle = await prisma.detalle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DetalleFindFirstArgs>(args?: SelectSubset<T, DetalleFindFirstArgs<ExtArgs>>): Prisma__DetalleClient<$Result.GetResult<Prisma.$DetallePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Detalle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalleFindFirstOrThrowArgs} args - Arguments to find a Detalle
     * @example
     * // Get one Detalle
     * const detalle = await prisma.detalle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DetalleFindFirstOrThrowArgs>(args?: SelectSubset<T, DetalleFindFirstOrThrowArgs<ExtArgs>>): Prisma__DetalleClient<$Result.GetResult<Prisma.$DetallePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Detalles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Detalles
     * const detalles = await prisma.detalle.findMany()
     * 
     * // Get first 10 Detalles
     * const detalles = await prisma.detalle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const detalleWithIdOnly = await prisma.detalle.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DetalleFindManyArgs>(args?: SelectSubset<T, DetalleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetallePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Detalle.
     * @param {DetalleCreateArgs} args - Arguments to create a Detalle.
     * @example
     * // Create one Detalle
     * const Detalle = await prisma.detalle.create({
     *   data: {
     *     // ... data to create a Detalle
     *   }
     * })
     * 
     */
    create<T extends DetalleCreateArgs>(args: SelectSubset<T, DetalleCreateArgs<ExtArgs>>): Prisma__DetalleClient<$Result.GetResult<Prisma.$DetallePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Detalles.
     * @param {DetalleCreateManyArgs} args - Arguments to create many Detalles.
     * @example
     * // Create many Detalles
     * const detalle = await prisma.detalle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DetalleCreateManyArgs>(args?: SelectSubset<T, DetalleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Detalles and returns the data saved in the database.
     * @param {DetalleCreateManyAndReturnArgs} args - Arguments to create many Detalles.
     * @example
     * // Create many Detalles
     * const detalle = await prisma.detalle.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Detalles and only return the `id`
     * const detalleWithIdOnly = await prisma.detalle.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DetalleCreateManyAndReturnArgs>(args?: SelectSubset<T, DetalleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetallePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Detalle.
     * @param {DetalleDeleteArgs} args - Arguments to delete one Detalle.
     * @example
     * // Delete one Detalle
     * const Detalle = await prisma.detalle.delete({
     *   where: {
     *     // ... filter to delete one Detalle
     *   }
     * })
     * 
     */
    delete<T extends DetalleDeleteArgs>(args: SelectSubset<T, DetalleDeleteArgs<ExtArgs>>): Prisma__DetalleClient<$Result.GetResult<Prisma.$DetallePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Detalle.
     * @param {DetalleUpdateArgs} args - Arguments to update one Detalle.
     * @example
     * // Update one Detalle
     * const detalle = await prisma.detalle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DetalleUpdateArgs>(args: SelectSubset<T, DetalleUpdateArgs<ExtArgs>>): Prisma__DetalleClient<$Result.GetResult<Prisma.$DetallePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Detalles.
     * @param {DetalleDeleteManyArgs} args - Arguments to filter Detalles to delete.
     * @example
     * // Delete a few Detalles
     * const { count } = await prisma.detalle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DetalleDeleteManyArgs>(args?: SelectSubset<T, DetalleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Detalles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Detalles
     * const detalle = await prisma.detalle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DetalleUpdateManyArgs>(args: SelectSubset<T, DetalleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Detalles and returns the data updated in the database.
     * @param {DetalleUpdateManyAndReturnArgs} args - Arguments to update many Detalles.
     * @example
     * // Update many Detalles
     * const detalle = await prisma.detalle.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Detalles and only return the `id`
     * const detalleWithIdOnly = await prisma.detalle.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DetalleUpdateManyAndReturnArgs>(args: SelectSubset<T, DetalleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetallePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Detalle.
     * @param {DetalleUpsertArgs} args - Arguments to update or create a Detalle.
     * @example
     * // Update or create a Detalle
     * const detalle = await prisma.detalle.upsert({
     *   create: {
     *     // ... data to create a Detalle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Detalle we want to update
     *   }
     * })
     */
    upsert<T extends DetalleUpsertArgs>(args: SelectSubset<T, DetalleUpsertArgs<ExtArgs>>): Prisma__DetalleClient<$Result.GetResult<Prisma.$DetallePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Detalles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalleCountArgs} args - Arguments to filter Detalles to count.
     * @example
     * // Count the number of Detalles
     * const count = await prisma.detalle.count({
     *   where: {
     *     // ... the filter for the Detalles we want to count
     *   }
     * })
    **/
    count<T extends DetalleCountArgs>(
      args?: Subset<T, DetalleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DetalleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Detalle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DetalleAggregateArgs>(args: Subset<T, DetalleAggregateArgs>): Prisma.PrismaPromise<GetDetalleAggregateType<T>>

    /**
     * Group by Detalle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DetalleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DetalleGroupByArgs['orderBy'] }
        : { orderBy?: DetalleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DetalleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDetalleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Detalle model
   */
  readonly fields: DetalleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Detalle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DetalleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    producto<T extends ProductoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductoDefaultArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    talle<T extends TalleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TalleDefaultArgs<ExtArgs>>): Prisma__TalleClient<$Result.GetResult<Prisma.$TallePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    imgs<T extends Detalle$imgsArgs<ExtArgs> = {}>(args?: Subset<T, Detalle$imgsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImgPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    precios<T extends Detalle$preciosArgs<ExtArgs> = {}>(args?: Subset<T, Detalle$preciosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrecioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Detalle model
   */
  interface DetalleFieldRefs {
    readonly id: FieldRef<"Detalle", 'Int'>
    readonly color: FieldRef<"Detalle", 'String'>
    readonly estado: FieldRef<"Detalle", 'String'>
    readonly stock: FieldRef<"Detalle", 'Int'>
    readonly productoId: FieldRef<"Detalle", 'Int'>
    readonly talleId: FieldRef<"Detalle", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Detalle findUnique
   */
  export type DetalleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detalle
     */
    select?: DetalleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detalle
     */
    omit?: DetalleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleInclude<ExtArgs> | null
    /**
     * Filter, which Detalle to fetch.
     */
    where: DetalleWhereUniqueInput
  }

  /**
   * Detalle findUniqueOrThrow
   */
  export type DetalleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detalle
     */
    select?: DetalleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detalle
     */
    omit?: DetalleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleInclude<ExtArgs> | null
    /**
     * Filter, which Detalle to fetch.
     */
    where: DetalleWhereUniqueInput
  }

  /**
   * Detalle findFirst
   */
  export type DetalleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detalle
     */
    select?: DetalleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detalle
     */
    omit?: DetalleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleInclude<ExtArgs> | null
    /**
     * Filter, which Detalle to fetch.
     */
    where?: DetalleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Detalles to fetch.
     */
    orderBy?: DetalleOrderByWithRelationInput | DetalleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Detalles.
     */
    cursor?: DetalleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Detalles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Detalles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Detalles.
     */
    distinct?: DetalleScalarFieldEnum | DetalleScalarFieldEnum[]
  }

  /**
   * Detalle findFirstOrThrow
   */
  export type DetalleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detalle
     */
    select?: DetalleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detalle
     */
    omit?: DetalleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleInclude<ExtArgs> | null
    /**
     * Filter, which Detalle to fetch.
     */
    where?: DetalleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Detalles to fetch.
     */
    orderBy?: DetalleOrderByWithRelationInput | DetalleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Detalles.
     */
    cursor?: DetalleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Detalles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Detalles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Detalles.
     */
    distinct?: DetalleScalarFieldEnum | DetalleScalarFieldEnum[]
  }

  /**
   * Detalle findMany
   */
  export type DetalleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detalle
     */
    select?: DetalleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detalle
     */
    omit?: DetalleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleInclude<ExtArgs> | null
    /**
     * Filter, which Detalles to fetch.
     */
    where?: DetalleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Detalles to fetch.
     */
    orderBy?: DetalleOrderByWithRelationInput | DetalleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Detalles.
     */
    cursor?: DetalleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Detalles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Detalles.
     */
    skip?: number
    distinct?: DetalleScalarFieldEnum | DetalleScalarFieldEnum[]
  }

  /**
   * Detalle create
   */
  export type DetalleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detalle
     */
    select?: DetalleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detalle
     */
    omit?: DetalleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleInclude<ExtArgs> | null
    /**
     * The data needed to create a Detalle.
     */
    data: XOR<DetalleCreateInput, DetalleUncheckedCreateInput>
  }

  /**
   * Detalle createMany
   */
  export type DetalleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Detalles.
     */
    data: DetalleCreateManyInput | DetalleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Detalle createManyAndReturn
   */
  export type DetalleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detalle
     */
    select?: DetalleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Detalle
     */
    omit?: DetalleOmit<ExtArgs> | null
    /**
     * The data used to create many Detalles.
     */
    data: DetalleCreateManyInput | DetalleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Detalle update
   */
  export type DetalleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detalle
     */
    select?: DetalleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detalle
     */
    omit?: DetalleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleInclude<ExtArgs> | null
    /**
     * The data needed to update a Detalle.
     */
    data: XOR<DetalleUpdateInput, DetalleUncheckedUpdateInput>
    /**
     * Choose, which Detalle to update.
     */
    where: DetalleWhereUniqueInput
  }

  /**
   * Detalle updateMany
   */
  export type DetalleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Detalles.
     */
    data: XOR<DetalleUpdateManyMutationInput, DetalleUncheckedUpdateManyInput>
    /**
     * Filter which Detalles to update
     */
    where?: DetalleWhereInput
    /**
     * Limit how many Detalles to update.
     */
    limit?: number
  }

  /**
   * Detalle updateManyAndReturn
   */
  export type DetalleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detalle
     */
    select?: DetalleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Detalle
     */
    omit?: DetalleOmit<ExtArgs> | null
    /**
     * The data used to update Detalles.
     */
    data: XOR<DetalleUpdateManyMutationInput, DetalleUncheckedUpdateManyInput>
    /**
     * Filter which Detalles to update
     */
    where?: DetalleWhereInput
    /**
     * Limit how many Detalles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Detalle upsert
   */
  export type DetalleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detalle
     */
    select?: DetalleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detalle
     */
    omit?: DetalleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleInclude<ExtArgs> | null
    /**
     * The filter to search for the Detalle to update in case it exists.
     */
    where: DetalleWhereUniqueInput
    /**
     * In case the Detalle found by the `where` argument doesn't exist, create a new Detalle with this data.
     */
    create: XOR<DetalleCreateInput, DetalleUncheckedCreateInput>
    /**
     * In case the Detalle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DetalleUpdateInput, DetalleUncheckedUpdateInput>
  }

  /**
   * Detalle delete
   */
  export type DetalleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detalle
     */
    select?: DetalleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detalle
     */
    omit?: DetalleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleInclude<ExtArgs> | null
    /**
     * Filter which Detalle to delete.
     */
    where: DetalleWhereUniqueInput
  }

  /**
   * Detalle deleteMany
   */
  export type DetalleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Detalles to delete
     */
    where?: DetalleWhereInput
    /**
     * Limit how many Detalles to delete.
     */
    limit?: number
  }

  /**
   * Detalle.imgs
   */
  export type Detalle$imgsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Img
     */
    select?: ImgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Img
     */
    omit?: ImgOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImgInclude<ExtArgs> | null
    where?: ImgWhereInput
    orderBy?: ImgOrderByWithRelationInput | ImgOrderByWithRelationInput[]
    cursor?: ImgWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ImgScalarFieldEnum | ImgScalarFieldEnum[]
  }

  /**
   * Detalle.precios
   */
  export type Detalle$preciosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Precio
     */
    select?: PrecioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Precio
     */
    omit?: PrecioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrecioInclude<ExtArgs> | null
    where?: PrecioWhereInput
    orderBy?: PrecioOrderByWithRelationInput | PrecioOrderByWithRelationInput[]
    cursor?: PrecioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PrecioScalarFieldEnum | PrecioScalarFieldEnum[]
  }

  /**
   * Detalle without action
   */
  export type DetalleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detalle
     */
    select?: DetalleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detalle
     */
    omit?: DetalleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleInclude<ExtArgs> | null
  }


  /**
   * Model Direccion
   */

  export type AggregateDireccion = {
    _count: DireccionCountAggregateOutputType | null
    _avg: DireccionAvgAggregateOutputType | null
    _sum: DireccionSumAggregateOutputType | null
    _min: DireccionMinAggregateOutputType | null
    _max: DireccionMaxAggregateOutputType | null
  }

  export type DireccionAvgAggregateOutputType = {
    id: number | null
  }

  export type DireccionSumAggregateOutputType = {
    id: number | null
  }

  export type DireccionMinAggregateOutputType = {
    id: number | null
    localidad: string | null
    pais: string | null
    provincia: string | null
    departamento: string | null
    codigoPostal: string | null
  }

  export type DireccionMaxAggregateOutputType = {
    id: number | null
    localidad: string | null
    pais: string | null
    provincia: string | null
    departamento: string | null
    codigoPostal: string | null
  }

  export type DireccionCountAggregateOutputType = {
    id: number
    localidad: number
    pais: number
    provincia: number
    departamento: number
    codigoPostal: number
    _all: number
  }


  export type DireccionAvgAggregateInputType = {
    id?: true
  }

  export type DireccionSumAggregateInputType = {
    id?: true
  }

  export type DireccionMinAggregateInputType = {
    id?: true
    localidad?: true
    pais?: true
    provincia?: true
    departamento?: true
    codigoPostal?: true
  }

  export type DireccionMaxAggregateInputType = {
    id?: true
    localidad?: true
    pais?: true
    provincia?: true
    departamento?: true
    codigoPostal?: true
  }

  export type DireccionCountAggregateInputType = {
    id?: true
    localidad?: true
    pais?: true
    provincia?: true
    departamento?: true
    codigoPostal?: true
    _all?: true
  }

  export type DireccionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Direccion to aggregate.
     */
    where?: DireccionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Direccions to fetch.
     */
    orderBy?: DireccionOrderByWithRelationInput | DireccionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DireccionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Direccions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Direccions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Direccions
    **/
    _count?: true | DireccionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DireccionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DireccionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DireccionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DireccionMaxAggregateInputType
  }

  export type GetDireccionAggregateType<T extends DireccionAggregateArgs> = {
        [P in keyof T & keyof AggregateDireccion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDireccion[P]>
      : GetScalarType<T[P], AggregateDireccion[P]>
  }




  export type DireccionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DireccionWhereInput
    orderBy?: DireccionOrderByWithAggregationInput | DireccionOrderByWithAggregationInput[]
    by: DireccionScalarFieldEnum[] | DireccionScalarFieldEnum
    having?: DireccionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DireccionCountAggregateInputType | true
    _avg?: DireccionAvgAggregateInputType
    _sum?: DireccionSumAggregateInputType
    _min?: DireccionMinAggregateInputType
    _max?: DireccionMaxAggregateInputType
  }

  export type DireccionGroupByOutputType = {
    id: number
    localidad: string
    pais: string
    provincia: string
    departamento: string
    codigoPostal: string
    _count: DireccionCountAggregateOutputType | null
    _avg: DireccionAvgAggregateOutputType | null
    _sum: DireccionSumAggregateOutputType | null
    _min: DireccionMinAggregateOutputType | null
    _max: DireccionMaxAggregateOutputType | null
  }

  type GetDireccionGroupByPayload<T extends DireccionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DireccionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DireccionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DireccionGroupByOutputType[P]>
            : GetScalarType<T[P], DireccionGroupByOutputType[P]>
        }
      >
    >


  export type DireccionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    localidad?: boolean
    pais?: boolean
    provincia?: boolean
    departamento?: boolean
    codigoPostal?: boolean
    usuarios?: boolean | Direccion$usuariosArgs<ExtArgs>
    _count?: boolean | DireccionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["direccion"]>

  export type DireccionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    localidad?: boolean
    pais?: boolean
    provincia?: boolean
    departamento?: boolean
    codigoPostal?: boolean
  }, ExtArgs["result"]["direccion"]>

  export type DireccionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    localidad?: boolean
    pais?: boolean
    provincia?: boolean
    departamento?: boolean
    codigoPostal?: boolean
  }, ExtArgs["result"]["direccion"]>

  export type DireccionSelectScalar = {
    id?: boolean
    localidad?: boolean
    pais?: boolean
    provincia?: boolean
    departamento?: boolean
    codigoPostal?: boolean
  }

  export type DireccionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "localidad" | "pais" | "provincia" | "departamento" | "codigoPostal", ExtArgs["result"]["direccion"]>
  export type DireccionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | Direccion$usuariosArgs<ExtArgs>
    _count?: boolean | DireccionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DireccionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DireccionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DireccionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Direccion"
    objects: {
      usuarios: Prisma.$UsuarioDireccionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      localidad: string
      pais: string
      provincia: string
      departamento: string
      codigoPostal: string
    }, ExtArgs["result"]["direccion"]>
    composites: {}
  }

  type DireccionGetPayload<S extends boolean | null | undefined | DireccionDefaultArgs> = $Result.GetResult<Prisma.$DireccionPayload, S>

  type DireccionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DireccionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DireccionCountAggregateInputType | true
    }

  export interface DireccionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Direccion'], meta: { name: 'Direccion' } }
    /**
     * Find zero or one Direccion that matches the filter.
     * @param {DireccionFindUniqueArgs} args - Arguments to find a Direccion
     * @example
     * // Get one Direccion
     * const direccion = await prisma.direccion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DireccionFindUniqueArgs>(args: SelectSubset<T, DireccionFindUniqueArgs<ExtArgs>>): Prisma__DireccionClient<$Result.GetResult<Prisma.$DireccionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Direccion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DireccionFindUniqueOrThrowArgs} args - Arguments to find a Direccion
     * @example
     * // Get one Direccion
     * const direccion = await prisma.direccion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DireccionFindUniqueOrThrowArgs>(args: SelectSubset<T, DireccionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DireccionClient<$Result.GetResult<Prisma.$DireccionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Direccion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DireccionFindFirstArgs} args - Arguments to find a Direccion
     * @example
     * // Get one Direccion
     * const direccion = await prisma.direccion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DireccionFindFirstArgs>(args?: SelectSubset<T, DireccionFindFirstArgs<ExtArgs>>): Prisma__DireccionClient<$Result.GetResult<Prisma.$DireccionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Direccion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DireccionFindFirstOrThrowArgs} args - Arguments to find a Direccion
     * @example
     * // Get one Direccion
     * const direccion = await prisma.direccion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DireccionFindFirstOrThrowArgs>(args?: SelectSubset<T, DireccionFindFirstOrThrowArgs<ExtArgs>>): Prisma__DireccionClient<$Result.GetResult<Prisma.$DireccionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Direccions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DireccionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Direccions
     * const direccions = await prisma.direccion.findMany()
     * 
     * // Get first 10 Direccions
     * const direccions = await prisma.direccion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const direccionWithIdOnly = await prisma.direccion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DireccionFindManyArgs>(args?: SelectSubset<T, DireccionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DireccionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Direccion.
     * @param {DireccionCreateArgs} args - Arguments to create a Direccion.
     * @example
     * // Create one Direccion
     * const Direccion = await prisma.direccion.create({
     *   data: {
     *     // ... data to create a Direccion
     *   }
     * })
     * 
     */
    create<T extends DireccionCreateArgs>(args: SelectSubset<T, DireccionCreateArgs<ExtArgs>>): Prisma__DireccionClient<$Result.GetResult<Prisma.$DireccionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Direccions.
     * @param {DireccionCreateManyArgs} args - Arguments to create many Direccions.
     * @example
     * // Create many Direccions
     * const direccion = await prisma.direccion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DireccionCreateManyArgs>(args?: SelectSubset<T, DireccionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Direccions and returns the data saved in the database.
     * @param {DireccionCreateManyAndReturnArgs} args - Arguments to create many Direccions.
     * @example
     * // Create many Direccions
     * const direccion = await prisma.direccion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Direccions and only return the `id`
     * const direccionWithIdOnly = await prisma.direccion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DireccionCreateManyAndReturnArgs>(args?: SelectSubset<T, DireccionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DireccionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Direccion.
     * @param {DireccionDeleteArgs} args - Arguments to delete one Direccion.
     * @example
     * // Delete one Direccion
     * const Direccion = await prisma.direccion.delete({
     *   where: {
     *     // ... filter to delete one Direccion
     *   }
     * })
     * 
     */
    delete<T extends DireccionDeleteArgs>(args: SelectSubset<T, DireccionDeleteArgs<ExtArgs>>): Prisma__DireccionClient<$Result.GetResult<Prisma.$DireccionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Direccion.
     * @param {DireccionUpdateArgs} args - Arguments to update one Direccion.
     * @example
     * // Update one Direccion
     * const direccion = await prisma.direccion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DireccionUpdateArgs>(args: SelectSubset<T, DireccionUpdateArgs<ExtArgs>>): Prisma__DireccionClient<$Result.GetResult<Prisma.$DireccionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Direccions.
     * @param {DireccionDeleteManyArgs} args - Arguments to filter Direccions to delete.
     * @example
     * // Delete a few Direccions
     * const { count } = await prisma.direccion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DireccionDeleteManyArgs>(args?: SelectSubset<T, DireccionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Direccions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DireccionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Direccions
     * const direccion = await prisma.direccion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DireccionUpdateManyArgs>(args: SelectSubset<T, DireccionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Direccions and returns the data updated in the database.
     * @param {DireccionUpdateManyAndReturnArgs} args - Arguments to update many Direccions.
     * @example
     * // Update many Direccions
     * const direccion = await prisma.direccion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Direccions and only return the `id`
     * const direccionWithIdOnly = await prisma.direccion.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DireccionUpdateManyAndReturnArgs>(args: SelectSubset<T, DireccionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DireccionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Direccion.
     * @param {DireccionUpsertArgs} args - Arguments to update or create a Direccion.
     * @example
     * // Update or create a Direccion
     * const direccion = await prisma.direccion.upsert({
     *   create: {
     *     // ... data to create a Direccion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Direccion we want to update
     *   }
     * })
     */
    upsert<T extends DireccionUpsertArgs>(args: SelectSubset<T, DireccionUpsertArgs<ExtArgs>>): Prisma__DireccionClient<$Result.GetResult<Prisma.$DireccionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Direccions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DireccionCountArgs} args - Arguments to filter Direccions to count.
     * @example
     * // Count the number of Direccions
     * const count = await prisma.direccion.count({
     *   where: {
     *     // ... the filter for the Direccions we want to count
     *   }
     * })
    **/
    count<T extends DireccionCountArgs>(
      args?: Subset<T, DireccionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DireccionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Direccion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DireccionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DireccionAggregateArgs>(args: Subset<T, DireccionAggregateArgs>): Prisma.PrismaPromise<GetDireccionAggregateType<T>>

    /**
     * Group by Direccion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DireccionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DireccionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DireccionGroupByArgs['orderBy'] }
        : { orderBy?: DireccionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DireccionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDireccionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Direccion model
   */
  readonly fields: DireccionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Direccion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DireccionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuarios<T extends Direccion$usuariosArgs<ExtArgs> = {}>(args?: Subset<T, Direccion$usuariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioDireccionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Direccion model
   */
  interface DireccionFieldRefs {
    readonly id: FieldRef<"Direccion", 'Int'>
    readonly localidad: FieldRef<"Direccion", 'String'>
    readonly pais: FieldRef<"Direccion", 'String'>
    readonly provincia: FieldRef<"Direccion", 'String'>
    readonly departamento: FieldRef<"Direccion", 'String'>
    readonly codigoPostal: FieldRef<"Direccion", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Direccion findUnique
   */
  export type DireccionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Direccion
     */
    select?: DireccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Direccion
     */
    omit?: DireccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DireccionInclude<ExtArgs> | null
    /**
     * Filter, which Direccion to fetch.
     */
    where: DireccionWhereUniqueInput
  }

  /**
   * Direccion findUniqueOrThrow
   */
  export type DireccionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Direccion
     */
    select?: DireccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Direccion
     */
    omit?: DireccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DireccionInclude<ExtArgs> | null
    /**
     * Filter, which Direccion to fetch.
     */
    where: DireccionWhereUniqueInput
  }

  /**
   * Direccion findFirst
   */
  export type DireccionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Direccion
     */
    select?: DireccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Direccion
     */
    omit?: DireccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DireccionInclude<ExtArgs> | null
    /**
     * Filter, which Direccion to fetch.
     */
    where?: DireccionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Direccions to fetch.
     */
    orderBy?: DireccionOrderByWithRelationInput | DireccionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Direccions.
     */
    cursor?: DireccionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Direccions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Direccions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Direccions.
     */
    distinct?: DireccionScalarFieldEnum | DireccionScalarFieldEnum[]
  }

  /**
   * Direccion findFirstOrThrow
   */
  export type DireccionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Direccion
     */
    select?: DireccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Direccion
     */
    omit?: DireccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DireccionInclude<ExtArgs> | null
    /**
     * Filter, which Direccion to fetch.
     */
    where?: DireccionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Direccions to fetch.
     */
    orderBy?: DireccionOrderByWithRelationInput | DireccionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Direccions.
     */
    cursor?: DireccionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Direccions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Direccions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Direccions.
     */
    distinct?: DireccionScalarFieldEnum | DireccionScalarFieldEnum[]
  }

  /**
   * Direccion findMany
   */
  export type DireccionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Direccion
     */
    select?: DireccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Direccion
     */
    omit?: DireccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DireccionInclude<ExtArgs> | null
    /**
     * Filter, which Direccions to fetch.
     */
    where?: DireccionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Direccions to fetch.
     */
    orderBy?: DireccionOrderByWithRelationInput | DireccionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Direccions.
     */
    cursor?: DireccionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Direccions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Direccions.
     */
    skip?: number
    distinct?: DireccionScalarFieldEnum | DireccionScalarFieldEnum[]
  }

  /**
   * Direccion create
   */
  export type DireccionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Direccion
     */
    select?: DireccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Direccion
     */
    omit?: DireccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DireccionInclude<ExtArgs> | null
    /**
     * The data needed to create a Direccion.
     */
    data: XOR<DireccionCreateInput, DireccionUncheckedCreateInput>
  }

  /**
   * Direccion createMany
   */
  export type DireccionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Direccions.
     */
    data: DireccionCreateManyInput | DireccionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Direccion createManyAndReturn
   */
  export type DireccionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Direccion
     */
    select?: DireccionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Direccion
     */
    omit?: DireccionOmit<ExtArgs> | null
    /**
     * The data used to create many Direccions.
     */
    data: DireccionCreateManyInput | DireccionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Direccion update
   */
  export type DireccionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Direccion
     */
    select?: DireccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Direccion
     */
    omit?: DireccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DireccionInclude<ExtArgs> | null
    /**
     * The data needed to update a Direccion.
     */
    data: XOR<DireccionUpdateInput, DireccionUncheckedUpdateInput>
    /**
     * Choose, which Direccion to update.
     */
    where: DireccionWhereUniqueInput
  }

  /**
   * Direccion updateMany
   */
  export type DireccionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Direccions.
     */
    data: XOR<DireccionUpdateManyMutationInput, DireccionUncheckedUpdateManyInput>
    /**
     * Filter which Direccions to update
     */
    where?: DireccionWhereInput
    /**
     * Limit how many Direccions to update.
     */
    limit?: number
  }

  /**
   * Direccion updateManyAndReturn
   */
  export type DireccionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Direccion
     */
    select?: DireccionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Direccion
     */
    omit?: DireccionOmit<ExtArgs> | null
    /**
     * The data used to update Direccions.
     */
    data: XOR<DireccionUpdateManyMutationInput, DireccionUncheckedUpdateManyInput>
    /**
     * Filter which Direccions to update
     */
    where?: DireccionWhereInput
    /**
     * Limit how many Direccions to update.
     */
    limit?: number
  }

  /**
   * Direccion upsert
   */
  export type DireccionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Direccion
     */
    select?: DireccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Direccion
     */
    omit?: DireccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DireccionInclude<ExtArgs> | null
    /**
     * The filter to search for the Direccion to update in case it exists.
     */
    where: DireccionWhereUniqueInput
    /**
     * In case the Direccion found by the `where` argument doesn't exist, create a new Direccion with this data.
     */
    create: XOR<DireccionCreateInput, DireccionUncheckedCreateInput>
    /**
     * In case the Direccion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DireccionUpdateInput, DireccionUncheckedUpdateInput>
  }

  /**
   * Direccion delete
   */
  export type DireccionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Direccion
     */
    select?: DireccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Direccion
     */
    omit?: DireccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DireccionInclude<ExtArgs> | null
    /**
     * Filter which Direccion to delete.
     */
    where: DireccionWhereUniqueInput
  }

  /**
   * Direccion deleteMany
   */
  export type DireccionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Direccions to delete
     */
    where?: DireccionWhereInput
    /**
     * Limit how many Direccions to delete.
     */
    limit?: number
  }

  /**
   * Direccion.usuarios
   */
  export type Direccion$usuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioDireccion
     */
    select?: UsuarioDireccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioDireccion
     */
    omit?: UsuarioDireccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioDireccionInclude<ExtArgs> | null
    where?: UsuarioDireccionWhereInput
    orderBy?: UsuarioDireccionOrderByWithRelationInput | UsuarioDireccionOrderByWithRelationInput[]
    cursor?: UsuarioDireccionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsuarioDireccionScalarFieldEnum | UsuarioDireccionScalarFieldEnum[]
  }

  /**
   * Direccion without action
   */
  export type DireccionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Direccion
     */
    select?: DireccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Direccion
     */
    omit?: DireccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DireccionInclude<ExtArgs> | null
  }


  /**
   * Model Img
   */

  export type AggregateImg = {
    _count: ImgCountAggregateOutputType | null
    _avg: ImgAvgAggregateOutputType | null
    _sum: ImgSumAggregateOutputType | null
    _min: ImgMinAggregateOutputType | null
    _max: ImgMaxAggregateOutputType | null
  }

  export type ImgAvgAggregateOutputType = {
    id: number | null
    detalleId: number | null
  }

  export type ImgSumAggregateOutputType = {
    id: number | null
    detalleId: number | null
  }

  export type ImgMinAggregateOutputType = {
    id: number | null
    url: string | null
    detalleId: number | null
  }

  export type ImgMaxAggregateOutputType = {
    id: number | null
    url: string | null
    detalleId: number | null
  }

  export type ImgCountAggregateOutputType = {
    id: number
    url: number
    detalleId: number
    _all: number
  }


  export type ImgAvgAggregateInputType = {
    id?: true
    detalleId?: true
  }

  export type ImgSumAggregateInputType = {
    id?: true
    detalleId?: true
  }

  export type ImgMinAggregateInputType = {
    id?: true
    url?: true
    detalleId?: true
  }

  export type ImgMaxAggregateInputType = {
    id?: true
    url?: true
    detalleId?: true
  }

  export type ImgCountAggregateInputType = {
    id?: true
    url?: true
    detalleId?: true
    _all?: true
  }

  export type ImgAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Img to aggregate.
     */
    where?: ImgWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Imgs to fetch.
     */
    orderBy?: ImgOrderByWithRelationInput | ImgOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImgWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Imgs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Imgs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Imgs
    **/
    _count?: true | ImgCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ImgAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ImgSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImgMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImgMaxAggregateInputType
  }

  export type GetImgAggregateType<T extends ImgAggregateArgs> = {
        [P in keyof T & keyof AggregateImg]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImg[P]>
      : GetScalarType<T[P], AggregateImg[P]>
  }




  export type ImgGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImgWhereInput
    orderBy?: ImgOrderByWithAggregationInput | ImgOrderByWithAggregationInput[]
    by: ImgScalarFieldEnum[] | ImgScalarFieldEnum
    having?: ImgScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImgCountAggregateInputType | true
    _avg?: ImgAvgAggregateInputType
    _sum?: ImgSumAggregateInputType
    _min?: ImgMinAggregateInputType
    _max?: ImgMaxAggregateInputType
  }

  export type ImgGroupByOutputType = {
    id: number
    url: string
    detalleId: number
    _count: ImgCountAggregateOutputType | null
    _avg: ImgAvgAggregateOutputType | null
    _sum: ImgSumAggregateOutputType | null
    _min: ImgMinAggregateOutputType | null
    _max: ImgMaxAggregateOutputType | null
  }

  type GetImgGroupByPayload<T extends ImgGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImgGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImgGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImgGroupByOutputType[P]>
            : GetScalarType<T[P], ImgGroupByOutputType[P]>
        }
      >
    >


  export type ImgSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    detalleId?: boolean
    detalle?: boolean | DetalleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["img"]>

  export type ImgSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    detalleId?: boolean
    detalle?: boolean | DetalleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["img"]>

  export type ImgSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    detalleId?: boolean
    detalle?: boolean | DetalleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["img"]>

  export type ImgSelectScalar = {
    id?: boolean
    url?: boolean
    detalleId?: boolean
  }

  export type ImgOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "detalleId", ExtArgs["result"]["img"]>
  export type ImgInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    detalle?: boolean | DetalleDefaultArgs<ExtArgs>
  }
  export type ImgIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    detalle?: boolean | DetalleDefaultArgs<ExtArgs>
  }
  export type ImgIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    detalle?: boolean | DetalleDefaultArgs<ExtArgs>
  }

  export type $ImgPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Img"
    objects: {
      detalle: Prisma.$DetallePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      url: string
      detalleId: number
    }, ExtArgs["result"]["img"]>
    composites: {}
  }

  type ImgGetPayload<S extends boolean | null | undefined | ImgDefaultArgs> = $Result.GetResult<Prisma.$ImgPayload, S>

  type ImgCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ImgFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ImgCountAggregateInputType | true
    }

  export interface ImgDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Img'], meta: { name: 'Img' } }
    /**
     * Find zero or one Img that matches the filter.
     * @param {ImgFindUniqueArgs} args - Arguments to find a Img
     * @example
     * // Get one Img
     * const img = await prisma.img.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ImgFindUniqueArgs>(args: SelectSubset<T, ImgFindUniqueArgs<ExtArgs>>): Prisma__ImgClient<$Result.GetResult<Prisma.$ImgPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Img that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ImgFindUniqueOrThrowArgs} args - Arguments to find a Img
     * @example
     * // Get one Img
     * const img = await prisma.img.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ImgFindUniqueOrThrowArgs>(args: SelectSubset<T, ImgFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ImgClient<$Result.GetResult<Prisma.$ImgPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Img that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImgFindFirstArgs} args - Arguments to find a Img
     * @example
     * // Get one Img
     * const img = await prisma.img.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ImgFindFirstArgs>(args?: SelectSubset<T, ImgFindFirstArgs<ExtArgs>>): Prisma__ImgClient<$Result.GetResult<Prisma.$ImgPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Img that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImgFindFirstOrThrowArgs} args - Arguments to find a Img
     * @example
     * // Get one Img
     * const img = await prisma.img.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ImgFindFirstOrThrowArgs>(args?: SelectSubset<T, ImgFindFirstOrThrowArgs<ExtArgs>>): Prisma__ImgClient<$Result.GetResult<Prisma.$ImgPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Imgs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImgFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Imgs
     * const imgs = await prisma.img.findMany()
     * 
     * // Get first 10 Imgs
     * const imgs = await prisma.img.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const imgWithIdOnly = await prisma.img.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ImgFindManyArgs>(args?: SelectSubset<T, ImgFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImgPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Img.
     * @param {ImgCreateArgs} args - Arguments to create a Img.
     * @example
     * // Create one Img
     * const Img = await prisma.img.create({
     *   data: {
     *     // ... data to create a Img
     *   }
     * })
     * 
     */
    create<T extends ImgCreateArgs>(args: SelectSubset<T, ImgCreateArgs<ExtArgs>>): Prisma__ImgClient<$Result.GetResult<Prisma.$ImgPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Imgs.
     * @param {ImgCreateManyArgs} args - Arguments to create many Imgs.
     * @example
     * // Create many Imgs
     * const img = await prisma.img.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ImgCreateManyArgs>(args?: SelectSubset<T, ImgCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Imgs and returns the data saved in the database.
     * @param {ImgCreateManyAndReturnArgs} args - Arguments to create many Imgs.
     * @example
     * // Create many Imgs
     * const img = await prisma.img.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Imgs and only return the `id`
     * const imgWithIdOnly = await prisma.img.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ImgCreateManyAndReturnArgs>(args?: SelectSubset<T, ImgCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImgPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Img.
     * @param {ImgDeleteArgs} args - Arguments to delete one Img.
     * @example
     * // Delete one Img
     * const Img = await prisma.img.delete({
     *   where: {
     *     // ... filter to delete one Img
     *   }
     * })
     * 
     */
    delete<T extends ImgDeleteArgs>(args: SelectSubset<T, ImgDeleteArgs<ExtArgs>>): Prisma__ImgClient<$Result.GetResult<Prisma.$ImgPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Img.
     * @param {ImgUpdateArgs} args - Arguments to update one Img.
     * @example
     * // Update one Img
     * const img = await prisma.img.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ImgUpdateArgs>(args: SelectSubset<T, ImgUpdateArgs<ExtArgs>>): Prisma__ImgClient<$Result.GetResult<Prisma.$ImgPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Imgs.
     * @param {ImgDeleteManyArgs} args - Arguments to filter Imgs to delete.
     * @example
     * // Delete a few Imgs
     * const { count } = await prisma.img.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ImgDeleteManyArgs>(args?: SelectSubset<T, ImgDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Imgs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImgUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Imgs
     * const img = await prisma.img.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ImgUpdateManyArgs>(args: SelectSubset<T, ImgUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Imgs and returns the data updated in the database.
     * @param {ImgUpdateManyAndReturnArgs} args - Arguments to update many Imgs.
     * @example
     * // Update many Imgs
     * const img = await prisma.img.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Imgs and only return the `id`
     * const imgWithIdOnly = await prisma.img.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ImgUpdateManyAndReturnArgs>(args: SelectSubset<T, ImgUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImgPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Img.
     * @param {ImgUpsertArgs} args - Arguments to update or create a Img.
     * @example
     * // Update or create a Img
     * const img = await prisma.img.upsert({
     *   create: {
     *     // ... data to create a Img
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Img we want to update
     *   }
     * })
     */
    upsert<T extends ImgUpsertArgs>(args: SelectSubset<T, ImgUpsertArgs<ExtArgs>>): Prisma__ImgClient<$Result.GetResult<Prisma.$ImgPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Imgs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImgCountArgs} args - Arguments to filter Imgs to count.
     * @example
     * // Count the number of Imgs
     * const count = await prisma.img.count({
     *   where: {
     *     // ... the filter for the Imgs we want to count
     *   }
     * })
    **/
    count<T extends ImgCountArgs>(
      args?: Subset<T, ImgCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImgCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Img.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImgAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ImgAggregateArgs>(args: Subset<T, ImgAggregateArgs>): Prisma.PrismaPromise<GetImgAggregateType<T>>

    /**
     * Group by Img.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImgGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ImgGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImgGroupByArgs['orderBy'] }
        : { orderBy?: ImgGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ImgGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImgGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Img model
   */
  readonly fields: ImgFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Img.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImgClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    detalle<T extends DetalleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DetalleDefaultArgs<ExtArgs>>): Prisma__DetalleClient<$Result.GetResult<Prisma.$DetallePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Img model
   */
  interface ImgFieldRefs {
    readonly id: FieldRef<"Img", 'Int'>
    readonly url: FieldRef<"Img", 'String'>
    readonly detalleId: FieldRef<"Img", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Img findUnique
   */
  export type ImgFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Img
     */
    select?: ImgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Img
     */
    omit?: ImgOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImgInclude<ExtArgs> | null
    /**
     * Filter, which Img to fetch.
     */
    where: ImgWhereUniqueInput
  }

  /**
   * Img findUniqueOrThrow
   */
  export type ImgFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Img
     */
    select?: ImgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Img
     */
    omit?: ImgOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImgInclude<ExtArgs> | null
    /**
     * Filter, which Img to fetch.
     */
    where: ImgWhereUniqueInput
  }

  /**
   * Img findFirst
   */
  export type ImgFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Img
     */
    select?: ImgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Img
     */
    omit?: ImgOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImgInclude<ExtArgs> | null
    /**
     * Filter, which Img to fetch.
     */
    where?: ImgWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Imgs to fetch.
     */
    orderBy?: ImgOrderByWithRelationInput | ImgOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Imgs.
     */
    cursor?: ImgWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Imgs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Imgs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Imgs.
     */
    distinct?: ImgScalarFieldEnum | ImgScalarFieldEnum[]
  }

  /**
   * Img findFirstOrThrow
   */
  export type ImgFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Img
     */
    select?: ImgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Img
     */
    omit?: ImgOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImgInclude<ExtArgs> | null
    /**
     * Filter, which Img to fetch.
     */
    where?: ImgWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Imgs to fetch.
     */
    orderBy?: ImgOrderByWithRelationInput | ImgOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Imgs.
     */
    cursor?: ImgWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Imgs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Imgs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Imgs.
     */
    distinct?: ImgScalarFieldEnum | ImgScalarFieldEnum[]
  }

  /**
   * Img findMany
   */
  export type ImgFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Img
     */
    select?: ImgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Img
     */
    omit?: ImgOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImgInclude<ExtArgs> | null
    /**
     * Filter, which Imgs to fetch.
     */
    where?: ImgWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Imgs to fetch.
     */
    orderBy?: ImgOrderByWithRelationInput | ImgOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Imgs.
     */
    cursor?: ImgWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Imgs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Imgs.
     */
    skip?: number
    distinct?: ImgScalarFieldEnum | ImgScalarFieldEnum[]
  }

  /**
   * Img create
   */
  export type ImgCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Img
     */
    select?: ImgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Img
     */
    omit?: ImgOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImgInclude<ExtArgs> | null
    /**
     * The data needed to create a Img.
     */
    data: XOR<ImgCreateInput, ImgUncheckedCreateInput>
  }

  /**
   * Img createMany
   */
  export type ImgCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Imgs.
     */
    data: ImgCreateManyInput | ImgCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Img createManyAndReturn
   */
  export type ImgCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Img
     */
    select?: ImgSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Img
     */
    omit?: ImgOmit<ExtArgs> | null
    /**
     * The data used to create many Imgs.
     */
    data: ImgCreateManyInput | ImgCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImgIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Img update
   */
  export type ImgUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Img
     */
    select?: ImgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Img
     */
    omit?: ImgOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImgInclude<ExtArgs> | null
    /**
     * The data needed to update a Img.
     */
    data: XOR<ImgUpdateInput, ImgUncheckedUpdateInput>
    /**
     * Choose, which Img to update.
     */
    where: ImgWhereUniqueInput
  }

  /**
   * Img updateMany
   */
  export type ImgUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Imgs.
     */
    data: XOR<ImgUpdateManyMutationInput, ImgUncheckedUpdateManyInput>
    /**
     * Filter which Imgs to update
     */
    where?: ImgWhereInput
    /**
     * Limit how many Imgs to update.
     */
    limit?: number
  }

  /**
   * Img updateManyAndReturn
   */
  export type ImgUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Img
     */
    select?: ImgSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Img
     */
    omit?: ImgOmit<ExtArgs> | null
    /**
     * The data used to update Imgs.
     */
    data: XOR<ImgUpdateManyMutationInput, ImgUncheckedUpdateManyInput>
    /**
     * Filter which Imgs to update
     */
    where?: ImgWhereInput
    /**
     * Limit how many Imgs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImgIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Img upsert
   */
  export type ImgUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Img
     */
    select?: ImgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Img
     */
    omit?: ImgOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImgInclude<ExtArgs> | null
    /**
     * The filter to search for the Img to update in case it exists.
     */
    where: ImgWhereUniqueInput
    /**
     * In case the Img found by the `where` argument doesn't exist, create a new Img with this data.
     */
    create: XOR<ImgCreateInput, ImgUncheckedCreateInput>
    /**
     * In case the Img was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImgUpdateInput, ImgUncheckedUpdateInput>
  }

  /**
   * Img delete
   */
  export type ImgDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Img
     */
    select?: ImgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Img
     */
    omit?: ImgOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImgInclude<ExtArgs> | null
    /**
     * Filter which Img to delete.
     */
    where: ImgWhereUniqueInput
  }

  /**
   * Img deleteMany
   */
  export type ImgDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Imgs to delete
     */
    where?: ImgWhereInput
    /**
     * Limit how many Imgs to delete.
     */
    limit?: number
  }

  /**
   * Img without action
   */
  export type ImgDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Img
     */
    select?: ImgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Img
     */
    omit?: ImgOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImgInclude<ExtArgs> | null
  }


  /**
   * Model ItemOrden
   */

  export type AggregateItemOrden = {
    _count: ItemOrdenCountAggregateOutputType | null
    _avg: ItemOrdenAvgAggregateOutputType | null
    _sum: ItemOrdenSumAggregateOutputType | null
    _min: ItemOrdenMinAggregateOutputType | null
    _max: ItemOrdenMaxAggregateOutputType | null
  }

  export type ItemOrdenAvgAggregateOutputType = {
    id: number | null
    cantidad: number | null
    ordenCompraId: number | null
    productoId: number | null
  }

  export type ItemOrdenSumAggregateOutputType = {
    id: number | null
    cantidad: number | null
    ordenCompraId: number | null
    productoId: number | null
  }

  export type ItemOrdenMinAggregateOutputType = {
    id: number | null
    cantidad: number | null
    ordenCompraId: number | null
    productoId: number | null
  }

  export type ItemOrdenMaxAggregateOutputType = {
    id: number | null
    cantidad: number | null
    ordenCompraId: number | null
    productoId: number | null
  }

  export type ItemOrdenCountAggregateOutputType = {
    id: number
    cantidad: number
    ordenCompraId: number
    productoId: number
    _all: number
  }


  export type ItemOrdenAvgAggregateInputType = {
    id?: true
    cantidad?: true
    ordenCompraId?: true
    productoId?: true
  }

  export type ItemOrdenSumAggregateInputType = {
    id?: true
    cantidad?: true
    ordenCompraId?: true
    productoId?: true
  }

  export type ItemOrdenMinAggregateInputType = {
    id?: true
    cantidad?: true
    ordenCompraId?: true
    productoId?: true
  }

  export type ItemOrdenMaxAggregateInputType = {
    id?: true
    cantidad?: true
    ordenCompraId?: true
    productoId?: true
  }

  export type ItemOrdenCountAggregateInputType = {
    id?: true
    cantidad?: true
    ordenCompraId?: true
    productoId?: true
    _all?: true
  }

  export type ItemOrdenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemOrden to aggregate.
     */
    where?: ItemOrdenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemOrdens to fetch.
     */
    orderBy?: ItemOrdenOrderByWithRelationInput | ItemOrdenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemOrdenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemOrdens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemOrdens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ItemOrdens
    **/
    _count?: true | ItemOrdenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemOrdenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemOrdenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemOrdenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemOrdenMaxAggregateInputType
  }

  export type GetItemOrdenAggregateType<T extends ItemOrdenAggregateArgs> = {
        [P in keyof T & keyof AggregateItemOrden]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItemOrden[P]>
      : GetScalarType<T[P], AggregateItemOrden[P]>
  }




  export type ItemOrdenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemOrdenWhereInput
    orderBy?: ItemOrdenOrderByWithAggregationInput | ItemOrdenOrderByWithAggregationInput[]
    by: ItemOrdenScalarFieldEnum[] | ItemOrdenScalarFieldEnum
    having?: ItemOrdenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemOrdenCountAggregateInputType | true
    _avg?: ItemOrdenAvgAggregateInputType
    _sum?: ItemOrdenSumAggregateInputType
    _min?: ItemOrdenMinAggregateInputType
    _max?: ItemOrdenMaxAggregateInputType
  }

  export type ItemOrdenGroupByOutputType = {
    id: number
    cantidad: number
    ordenCompraId: number
    productoId: number
    _count: ItemOrdenCountAggregateOutputType | null
    _avg: ItemOrdenAvgAggregateOutputType | null
    _sum: ItemOrdenSumAggregateOutputType | null
    _min: ItemOrdenMinAggregateOutputType | null
    _max: ItemOrdenMaxAggregateOutputType | null
  }

  type GetItemOrdenGroupByPayload<T extends ItemOrdenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemOrdenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemOrdenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemOrdenGroupByOutputType[P]>
            : GetScalarType<T[P], ItemOrdenGroupByOutputType[P]>
        }
      >
    >


  export type ItemOrdenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cantidad?: boolean
    ordenCompraId?: boolean
    productoId?: boolean
    ordenCompra?: boolean | OrdenCompraDefaultArgs<ExtArgs>
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemOrden"]>

  export type ItemOrdenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cantidad?: boolean
    ordenCompraId?: boolean
    productoId?: boolean
    ordenCompra?: boolean | OrdenCompraDefaultArgs<ExtArgs>
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemOrden"]>

  export type ItemOrdenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cantidad?: boolean
    ordenCompraId?: boolean
    productoId?: boolean
    ordenCompra?: boolean | OrdenCompraDefaultArgs<ExtArgs>
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemOrden"]>

  export type ItemOrdenSelectScalar = {
    id?: boolean
    cantidad?: boolean
    ordenCompraId?: boolean
    productoId?: boolean
  }

  export type ItemOrdenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cantidad" | "ordenCompraId" | "productoId", ExtArgs["result"]["itemOrden"]>
  export type ItemOrdenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ordenCompra?: boolean | OrdenCompraDefaultArgs<ExtArgs>
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
  }
  export type ItemOrdenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ordenCompra?: boolean | OrdenCompraDefaultArgs<ExtArgs>
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
  }
  export type ItemOrdenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ordenCompra?: boolean | OrdenCompraDefaultArgs<ExtArgs>
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
  }

  export type $ItemOrdenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ItemOrden"
    objects: {
      ordenCompra: Prisma.$OrdenCompraPayload<ExtArgs>
      producto: Prisma.$ProductoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cantidad: number
      ordenCompraId: number
      productoId: number
    }, ExtArgs["result"]["itemOrden"]>
    composites: {}
  }

  type ItemOrdenGetPayload<S extends boolean | null | undefined | ItemOrdenDefaultArgs> = $Result.GetResult<Prisma.$ItemOrdenPayload, S>

  type ItemOrdenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ItemOrdenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ItemOrdenCountAggregateInputType | true
    }

  export interface ItemOrdenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ItemOrden'], meta: { name: 'ItemOrden' } }
    /**
     * Find zero or one ItemOrden that matches the filter.
     * @param {ItemOrdenFindUniqueArgs} args - Arguments to find a ItemOrden
     * @example
     * // Get one ItemOrden
     * const itemOrden = await prisma.itemOrden.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ItemOrdenFindUniqueArgs>(args: SelectSubset<T, ItemOrdenFindUniqueArgs<ExtArgs>>): Prisma__ItemOrdenClient<$Result.GetResult<Prisma.$ItemOrdenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ItemOrden that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ItemOrdenFindUniqueOrThrowArgs} args - Arguments to find a ItemOrden
     * @example
     * // Get one ItemOrden
     * const itemOrden = await prisma.itemOrden.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ItemOrdenFindUniqueOrThrowArgs>(args: SelectSubset<T, ItemOrdenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ItemOrdenClient<$Result.GetResult<Prisma.$ItemOrdenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ItemOrden that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemOrdenFindFirstArgs} args - Arguments to find a ItemOrden
     * @example
     * // Get one ItemOrden
     * const itemOrden = await prisma.itemOrden.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ItemOrdenFindFirstArgs>(args?: SelectSubset<T, ItemOrdenFindFirstArgs<ExtArgs>>): Prisma__ItemOrdenClient<$Result.GetResult<Prisma.$ItemOrdenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ItemOrden that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemOrdenFindFirstOrThrowArgs} args - Arguments to find a ItemOrden
     * @example
     * // Get one ItemOrden
     * const itemOrden = await prisma.itemOrden.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ItemOrdenFindFirstOrThrowArgs>(args?: SelectSubset<T, ItemOrdenFindFirstOrThrowArgs<ExtArgs>>): Prisma__ItemOrdenClient<$Result.GetResult<Prisma.$ItemOrdenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ItemOrdens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemOrdenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ItemOrdens
     * const itemOrdens = await prisma.itemOrden.findMany()
     * 
     * // Get first 10 ItemOrdens
     * const itemOrdens = await prisma.itemOrden.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const itemOrdenWithIdOnly = await prisma.itemOrden.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ItemOrdenFindManyArgs>(args?: SelectSubset<T, ItemOrdenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemOrdenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ItemOrden.
     * @param {ItemOrdenCreateArgs} args - Arguments to create a ItemOrden.
     * @example
     * // Create one ItemOrden
     * const ItemOrden = await prisma.itemOrden.create({
     *   data: {
     *     // ... data to create a ItemOrden
     *   }
     * })
     * 
     */
    create<T extends ItemOrdenCreateArgs>(args: SelectSubset<T, ItemOrdenCreateArgs<ExtArgs>>): Prisma__ItemOrdenClient<$Result.GetResult<Prisma.$ItemOrdenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ItemOrdens.
     * @param {ItemOrdenCreateManyArgs} args - Arguments to create many ItemOrdens.
     * @example
     * // Create many ItemOrdens
     * const itemOrden = await prisma.itemOrden.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ItemOrdenCreateManyArgs>(args?: SelectSubset<T, ItemOrdenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ItemOrdens and returns the data saved in the database.
     * @param {ItemOrdenCreateManyAndReturnArgs} args - Arguments to create many ItemOrdens.
     * @example
     * // Create many ItemOrdens
     * const itemOrden = await prisma.itemOrden.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ItemOrdens and only return the `id`
     * const itemOrdenWithIdOnly = await prisma.itemOrden.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ItemOrdenCreateManyAndReturnArgs>(args?: SelectSubset<T, ItemOrdenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemOrdenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ItemOrden.
     * @param {ItemOrdenDeleteArgs} args - Arguments to delete one ItemOrden.
     * @example
     * // Delete one ItemOrden
     * const ItemOrden = await prisma.itemOrden.delete({
     *   where: {
     *     // ... filter to delete one ItemOrden
     *   }
     * })
     * 
     */
    delete<T extends ItemOrdenDeleteArgs>(args: SelectSubset<T, ItemOrdenDeleteArgs<ExtArgs>>): Prisma__ItemOrdenClient<$Result.GetResult<Prisma.$ItemOrdenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ItemOrden.
     * @param {ItemOrdenUpdateArgs} args - Arguments to update one ItemOrden.
     * @example
     * // Update one ItemOrden
     * const itemOrden = await prisma.itemOrden.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ItemOrdenUpdateArgs>(args: SelectSubset<T, ItemOrdenUpdateArgs<ExtArgs>>): Prisma__ItemOrdenClient<$Result.GetResult<Prisma.$ItemOrdenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ItemOrdens.
     * @param {ItemOrdenDeleteManyArgs} args - Arguments to filter ItemOrdens to delete.
     * @example
     * // Delete a few ItemOrdens
     * const { count } = await prisma.itemOrden.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ItemOrdenDeleteManyArgs>(args?: SelectSubset<T, ItemOrdenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemOrdens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemOrdenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ItemOrdens
     * const itemOrden = await prisma.itemOrden.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ItemOrdenUpdateManyArgs>(args: SelectSubset<T, ItemOrdenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemOrdens and returns the data updated in the database.
     * @param {ItemOrdenUpdateManyAndReturnArgs} args - Arguments to update many ItemOrdens.
     * @example
     * // Update many ItemOrdens
     * const itemOrden = await prisma.itemOrden.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ItemOrdens and only return the `id`
     * const itemOrdenWithIdOnly = await prisma.itemOrden.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ItemOrdenUpdateManyAndReturnArgs>(args: SelectSubset<T, ItemOrdenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemOrdenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ItemOrden.
     * @param {ItemOrdenUpsertArgs} args - Arguments to update or create a ItemOrden.
     * @example
     * // Update or create a ItemOrden
     * const itemOrden = await prisma.itemOrden.upsert({
     *   create: {
     *     // ... data to create a ItemOrden
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ItemOrden we want to update
     *   }
     * })
     */
    upsert<T extends ItemOrdenUpsertArgs>(args: SelectSubset<T, ItemOrdenUpsertArgs<ExtArgs>>): Prisma__ItemOrdenClient<$Result.GetResult<Prisma.$ItemOrdenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ItemOrdens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemOrdenCountArgs} args - Arguments to filter ItemOrdens to count.
     * @example
     * // Count the number of ItemOrdens
     * const count = await prisma.itemOrden.count({
     *   where: {
     *     // ... the filter for the ItemOrdens we want to count
     *   }
     * })
    **/
    count<T extends ItemOrdenCountArgs>(
      args?: Subset<T, ItemOrdenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemOrdenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ItemOrden.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemOrdenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ItemOrdenAggregateArgs>(args: Subset<T, ItemOrdenAggregateArgs>): Prisma.PrismaPromise<GetItemOrdenAggregateType<T>>

    /**
     * Group by ItemOrden.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemOrdenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ItemOrdenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemOrdenGroupByArgs['orderBy'] }
        : { orderBy?: ItemOrdenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ItemOrdenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemOrdenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ItemOrden model
   */
  readonly fields: ItemOrdenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ItemOrden.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemOrdenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ordenCompra<T extends OrdenCompraDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrdenCompraDefaultArgs<ExtArgs>>): Prisma__OrdenCompraClient<$Result.GetResult<Prisma.$OrdenCompraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    producto<T extends ProductoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductoDefaultArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ItemOrden model
   */
  interface ItemOrdenFieldRefs {
    readonly id: FieldRef<"ItemOrden", 'Int'>
    readonly cantidad: FieldRef<"ItemOrden", 'Int'>
    readonly ordenCompraId: FieldRef<"ItemOrden", 'Int'>
    readonly productoId: FieldRef<"ItemOrden", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ItemOrden findUnique
   */
  export type ItemOrdenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemOrden
     */
    select?: ItemOrdenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemOrden
     */
    omit?: ItemOrdenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemOrdenInclude<ExtArgs> | null
    /**
     * Filter, which ItemOrden to fetch.
     */
    where: ItemOrdenWhereUniqueInput
  }

  /**
   * ItemOrden findUniqueOrThrow
   */
  export type ItemOrdenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemOrden
     */
    select?: ItemOrdenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemOrden
     */
    omit?: ItemOrdenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemOrdenInclude<ExtArgs> | null
    /**
     * Filter, which ItemOrden to fetch.
     */
    where: ItemOrdenWhereUniqueInput
  }

  /**
   * ItemOrden findFirst
   */
  export type ItemOrdenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemOrden
     */
    select?: ItemOrdenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemOrden
     */
    omit?: ItemOrdenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemOrdenInclude<ExtArgs> | null
    /**
     * Filter, which ItemOrden to fetch.
     */
    where?: ItemOrdenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemOrdens to fetch.
     */
    orderBy?: ItemOrdenOrderByWithRelationInput | ItemOrdenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemOrdens.
     */
    cursor?: ItemOrdenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemOrdens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemOrdens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemOrdens.
     */
    distinct?: ItemOrdenScalarFieldEnum | ItemOrdenScalarFieldEnum[]
  }

  /**
   * ItemOrden findFirstOrThrow
   */
  export type ItemOrdenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemOrden
     */
    select?: ItemOrdenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemOrden
     */
    omit?: ItemOrdenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemOrdenInclude<ExtArgs> | null
    /**
     * Filter, which ItemOrden to fetch.
     */
    where?: ItemOrdenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemOrdens to fetch.
     */
    orderBy?: ItemOrdenOrderByWithRelationInput | ItemOrdenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemOrdens.
     */
    cursor?: ItemOrdenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemOrdens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemOrdens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemOrdens.
     */
    distinct?: ItemOrdenScalarFieldEnum | ItemOrdenScalarFieldEnum[]
  }

  /**
   * ItemOrden findMany
   */
  export type ItemOrdenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemOrden
     */
    select?: ItemOrdenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemOrden
     */
    omit?: ItemOrdenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemOrdenInclude<ExtArgs> | null
    /**
     * Filter, which ItemOrdens to fetch.
     */
    where?: ItemOrdenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemOrdens to fetch.
     */
    orderBy?: ItemOrdenOrderByWithRelationInput | ItemOrdenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ItemOrdens.
     */
    cursor?: ItemOrdenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemOrdens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemOrdens.
     */
    skip?: number
    distinct?: ItemOrdenScalarFieldEnum | ItemOrdenScalarFieldEnum[]
  }

  /**
   * ItemOrden create
   */
  export type ItemOrdenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemOrden
     */
    select?: ItemOrdenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemOrden
     */
    omit?: ItemOrdenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemOrdenInclude<ExtArgs> | null
    /**
     * The data needed to create a ItemOrden.
     */
    data: XOR<ItemOrdenCreateInput, ItemOrdenUncheckedCreateInput>
  }

  /**
   * ItemOrden createMany
   */
  export type ItemOrdenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ItemOrdens.
     */
    data: ItemOrdenCreateManyInput | ItemOrdenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ItemOrden createManyAndReturn
   */
  export type ItemOrdenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemOrden
     */
    select?: ItemOrdenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ItemOrden
     */
    omit?: ItemOrdenOmit<ExtArgs> | null
    /**
     * The data used to create many ItemOrdens.
     */
    data: ItemOrdenCreateManyInput | ItemOrdenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemOrdenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ItemOrden update
   */
  export type ItemOrdenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemOrden
     */
    select?: ItemOrdenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemOrden
     */
    omit?: ItemOrdenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemOrdenInclude<ExtArgs> | null
    /**
     * The data needed to update a ItemOrden.
     */
    data: XOR<ItemOrdenUpdateInput, ItemOrdenUncheckedUpdateInput>
    /**
     * Choose, which ItemOrden to update.
     */
    where: ItemOrdenWhereUniqueInput
  }

  /**
   * ItemOrden updateMany
   */
  export type ItemOrdenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ItemOrdens.
     */
    data: XOR<ItemOrdenUpdateManyMutationInput, ItemOrdenUncheckedUpdateManyInput>
    /**
     * Filter which ItemOrdens to update
     */
    where?: ItemOrdenWhereInput
    /**
     * Limit how many ItemOrdens to update.
     */
    limit?: number
  }

  /**
   * ItemOrden updateManyAndReturn
   */
  export type ItemOrdenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemOrden
     */
    select?: ItemOrdenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ItemOrden
     */
    omit?: ItemOrdenOmit<ExtArgs> | null
    /**
     * The data used to update ItemOrdens.
     */
    data: XOR<ItemOrdenUpdateManyMutationInput, ItemOrdenUncheckedUpdateManyInput>
    /**
     * Filter which ItemOrdens to update
     */
    where?: ItemOrdenWhereInput
    /**
     * Limit how many ItemOrdens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemOrdenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ItemOrden upsert
   */
  export type ItemOrdenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemOrden
     */
    select?: ItemOrdenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemOrden
     */
    omit?: ItemOrdenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemOrdenInclude<ExtArgs> | null
    /**
     * The filter to search for the ItemOrden to update in case it exists.
     */
    where: ItemOrdenWhereUniqueInput
    /**
     * In case the ItemOrden found by the `where` argument doesn't exist, create a new ItemOrden with this data.
     */
    create: XOR<ItemOrdenCreateInput, ItemOrdenUncheckedCreateInput>
    /**
     * In case the ItemOrden was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemOrdenUpdateInput, ItemOrdenUncheckedUpdateInput>
  }

  /**
   * ItemOrden delete
   */
  export type ItemOrdenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemOrden
     */
    select?: ItemOrdenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemOrden
     */
    omit?: ItemOrdenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemOrdenInclude<ExtArgs> | null
    /**
     * Filter which ItemOrden to delete.
     */
    where: ItemOrdenWhereUniqueInput
  }

  /**
   * ItemOrden deleteMany
   */
  export type ItemOrdenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemOrdens to delete
     */
    where?: ItemOrdenWhereInput
    /**
     * Limit how many ItemOrdens to delete.
     */
    limit?: number
  }

  /**
   * ItemOrden without action
   */
  export type ItemOrdenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemOrden
     */
    select?: ItemOrdenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemOrden
     */
    omit?: ItemOrdenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemOrdenInclude<ExtArgs> | null
  }


  /**
   * Model OrdenCompra
   */

  export type AggregateOrdenCompra = {
    _count: OrdenCompraCountAggregateOutputType | null
    _avg: OrdenCompraAvgAggregateOutputType | null
    _sum: OrdenCompraSumAggregateOutputType | null
    _min: OrdenCompraMinAggregateOutputType | null
    _max: OrdenCompraMaxAggregateOutputType | null
  }

  export type OrdenCompraAvgAggregateOutputType = {
    id: number | null
    total: number | null
    descuento: number | null
    direccionEnvioId: number | null
  }

  export type OrdenCompraSumAggregateOutputType = {
    id: number | null
    total: number | null
    descuento: number | null
    direccionEnvioId: number | null
  }

  export type OrdenCompraMinAggregateOutputType = {
    id: number | null
    total: number | null
    descuento: number | null
    fechaCompra: string | null
    usuarioId: string | null
    direccionEnvioId: number | null
  }

  export type OrdenCompraMaxAggregateOutputType = {
    id: number | null
    total: number | null
    descuento: number | null
    fechaCompra: string | null
    usuarioId: string | null
    direccionEnvioId: number | null
  }

  export type OrdenCompraCountAggregateOutputType = {
    id: number
    total: number
    descuento: number
    fechaCompra: number
    usuarioId: number
    direccionEnvioId: number
    _all: number
  }


  export type OrdenCompraAvgAggregateInputType = {
    id?: true
    total?: true
    descuento?: true
    direccionEnvioId?: true
  }

  export type OrdenCompraSumAggregateInputType = {
    id?: true
    total?: true
    descuento?: true
    direccionEnvioId?: true
  }

  export type OrdenCompraMinAggregateInputType = {
    id?: true
    total?: true
    descuento?: true
    fechaCompra?: true
    usuarioId?: true
    direccionEnvioId?: true
  }

  export type OrdenCompraMaxAggregateInputType = {
    id?: true
    total?: true
    descuento?: true
    fechaCompra?: true
    usuarioId?: true
    direccionEnvioId?: true
  }

  export type OrdenCompraCountAggregateInputType = {
    id?: true
    total?: true
    descuento?: true
    fechaCompra?: true
    usuarioId?: true
    direccionEnvioId?: true
    _all?: true
  }

  export type OrdenCompraAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrdenCompra to aggregate.
     */
    where?: OrdenCompraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrdenCompras to fetch.
     */
    orderBy?: OrdenCompraOrderByWithRelationInput | OrdenCompraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrdenCompraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrdenCompras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrdenCompras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrdenCompras
    **/
    _count?: true | OrdenCompraCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrdenCompraAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrdenCompraSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrdenCompraMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrdenCompraMaxAggregateInputType
  }

  export type GetOrdenCompraAggregateType<T extends OrdenCompraAggregateArgs> = {
        [P in keyof T & keyof AggregateOrdenCompra]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrdenCompra[P]>
      : GetScalarType<T[P], AggregateOrdenCompra[P]>
  }




  export type OrdenCompraGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdenCompraWhereInput
    orderBy?: OrdenCompraOrderByWithAggregationInput | OrdenCompraOrderByWithAggregationInput[]
    by: OrdenCompraScalarFieldEnum[] | OrdenCompraScalarFieldEnum
    having?: OrdenCompraScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrdenCompraCountAggregateInputType | true
    _avg?: OrdenCompraAvgAggregateInputType
    _sum?: OrdenCompraSumAggregateInputType
    _min?: OrdenCompraMinAggregateInputType
    _max?: OrdenCompraMaxAggregateInputType
  }

  export type OrdenCompraGroupByOutputType = {
    id: number
    total: number
    descuento: number
    fechaCompra: string
    usuarioId: string
    direccionEnvioId: number
    _count: OrdenCompraCountAggregateOutputType | null
    _avg: OrdenCompraAvgAggregateOutputType | null
    _sum: OrdenCompraSumAggregateOutputType | null
    _min: OrdenCompraMinAggregateOutputType | null
    _max: OrdenCompraMaxAggregateOutputType | null
  }

  type GetOrdenCompraGroupByPayload<T extends OrdenCompraGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrdenCompraGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrdenCompraGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrdenCompraGroupByOutputType[P]>
            : GetScalarType<T[P], OrdenCompraGroupByOutputType[P]>
        }
      >
    >


  export type OrdenCompraSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    total?: boolean
    descuento?: boolean
    fechaCompra?: boolean
    usuarioId?: boolean
    direccionEnvioId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    direccionEnvio?: boolean | UsuarioDireccionDefaultArgs<ExtArgs>
    items?: boolean | OrdenCompra$itemsArgs<ExtArgs>
    _count?: boolean | OrdenCompraCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ordenCompra"]>

  export type OrdenCompraSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    total?: boolean
    descuento?: boolean
    fechaCompra?: boolean
    usuarioId?: boolean
    direccionEnvioId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    direccionEnvio?: boolean | UsuarioDireccionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ordenCompra"]>

  export type OrdenCompraSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    total?: boolean
    descuento?: boolean
    fechaCompra?: boolean
    usuarioId?: boolean
    direccionEnvioId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    direccionEnvio?: boolean | UsuarioDireccionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ordenCompra"]>

  export type OrdenCompraSelectScalar = {
    id?: boolean
    total?: boolean
    descuento?: boolean
    fechaCompra?: boolean
    usuarioId?: boolean
    direccionEnvioId?: boolean
  }

  export type OrdenCompraOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "total" | "descuento" | "fechaCompra" | "usuarioId" | "direccionEnvioId", ExtArgs["result"]["ordenCompra"]>
  export type OrdenCompraInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    direccionEnvio?: boolean | UsuarioDireccionDefaultArgs<ExtArgs>
    items?: boolean | OrdenCompra$itemsArgs<ExtArgs>
    _count?: boolean | OrdenCompraCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrdenCompraIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    direccionEnvio?: boolean | UsuarioDireccionDefaultArgs<ExtArgs>
  }
  export type OrdenCompraIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    direccionEnvio?: boolean | UsuarioDireccionDefaultArgs<ExtArgs>
  }

  export type $OrdenCompraPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrdenCompra"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      direccionEnvio: Prisma.$UsuarioDireccionPayload<ExtArgs>
      items: Prisma.$ItemOrdenPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      total: number
      descuento: number
      fechaCompra: string
      usuarioId: string
      direccionEnvioId: number
    }, ExtArgs["result"]["ordenCompra"]>
    composites: {}
  }

  type OrdenCompraGetPayload<S extends boolean | null | undefined | OrdenCompraDefaultArgs> = $Result.GetResult<Prisma.$OrdenCompraPayload, S>

  type OrdenCompraCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrdenCompraFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrdenCompraCountAggregateInputType | true
    }

  export interface OrdenCompraDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrdenCompra'], meta: { name: 'OrdenCompra' } }
    /**
     * Find zero or one OrdenCompra that matches the filter.
     * @param {OrdenCompraFindUniqueArgs} args - Arguments to find a OrdenCompra
     * @example
     * // Get one OrdenCompra
     * const ordenCompra = await prisma.ordenCompra.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrdenCompraFindUniqueArgs>(args: SelectSubset<T, OrdenCompraFindUniqueArgs<ExtArgs>>): Prisma__OrdenCompraClient<$Result.GetResult<Prisma.$OrdenCompraPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrdenCompra that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrdenCompraFindUniqueOrThrowArgs} args - Arguments to find a OrdenCompra
     * @example
     * // Get one OrdenCompra
     * const ordenCompra = await prisma.ordenCompra.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrdenCompraFindUniqueOrThrowArgs>(args: SelectSubset<T, OrdenCompraFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrdenCompraClient<$Result.GetResult<Prisma.$OrdenCompraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrdenCompra that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdenCompraFindFirstArgs} args - Arguments to find a OrdenCompra
     * @example
     * // Get one OrdenCompra
     * const ordenCompra = await prisma.ordenCompra.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrdenCompraFindFirstArgs>(args?: SelectSubset<T, OrdenCompraFindFirstArgs<ExtArgs>>): Prisma__OrdenCompraClient<$Result.GetResult<Prisma.$OrdenCompraPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrdenCompra that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdenCompraFindFirstOrThrowArgs} args - Arguments to find a OrdenCompra
     * @example
     * // Get one OrdenCompra
     * const ordenCompra = await prisma.ordenCompra.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrdenCompraFindFirstOrThrowArgs>(args?: SelectSubset<T, OrdenCompraFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrdenCompraClient<$Result.GetResult<Prisma.$OrdenCompraPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrdenCompras that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdenCompraFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrdenCompras
     * const ordenCompras = await prisma.ordenCompra.findMany()
     * 
     * // Get first 10 OrdenCompras
     * const ordenCompras = await prisma.ordenCompra.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ordenCompraWithIdOnly = await prisma.ordenCompra.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrdenCompraFindManyArgs>(args?: SelectSubset<T, OrdenCompraFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdenCompraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrdenCompra.
     * @param {OrdenCompraCreateArgs} args - Arguments to create a OrdenCompra.
     * @example
     * // Create one OrdenCompra
     * const OrdenCompra = await prisma.ordenCompra.create({
     *   data: {
     *     // ... data to create a OrdenCompra
     *   }
     * })
     * 
     */
    create<T extends OrdenCompraCreateArgs>(args: SelectSubset<T, OrdenCompraCreateArgs<ExtArgs>>): Prisma__OrdenCompraClient<$Result.GetResult<Prisma.$OrdenCompraPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrdenCompras.
     * @param {OrdenCompraCreateManyArgs} args - Arguments to create many OrdenCompras.
     * @example
     * // Create many OrdenCompras
     * const ordenCompra = await prisma.ordenCompra.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrdenCompraCreateManyArgs>(args?: SelectSubset<T, OrdenCompraCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrdenCompras and returns the data saved in the database.
     * @param {OrdenCompraCreateManyAndReturnArgs} args - Arguments to create many OrdenCompras.
     * @example
     * // Create many OrdenCompras
     * const ordenCompra = await prisma.ordenCompra.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrdenCompras and only return the `id`
     * const ordenCompraWithIdOnly = await prisma.ordenCompra.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrdenCompraCreateManyAndReturnArgs>(args?: SelectSubset<T, OrdenCompraCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdenCompraPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OrdenCompra.
     * @param {OrdenCompraDeleteArgs} args - Arguments to delete one OrdenCompra.
     * @example
     * // Delete one OrdenCompra
     * const OrdenCompra = await prisma.ordenCompra.delete({
     *   where: {
     *     // ... filter to delete one OrdenCompra
     *   }
     * })
     * 
     */
    delete<T extends OrdenCompraDeleteArgs>(args: SelectSubset<T, OrdenCompraDeleteArgs<ExtArgs>>): Prisma__OrdenCompraClient<$Result.GetResult<Prisma.$OrdenCompraPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrdenCompra.
     * @param {OrdenCompraUpdateArgs} args - Arguments to update one OrdenCompra.
     * @example
     * // Update one OrdenCompra
     * const ordenCompra = await prisma.ordenCompra.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrdenCompraUpdateArgs>(args: SelectSubset<T, OrdenCompraUpdateArgs<ExtArgs>>): Prisma__OrdenCompraClient<$Result.GetResult<Prisma.$OrdenCompraPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrdenCompras.
     * @param {OrdenCompraDeleteManyArgs} args - Arguments to filter OrdenCompras to delete.
     * @example
     * // Delete a few OrdenCompras
     * const { count } = await prisma.ordenCompra.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrdenCompraDeleteManyArgs>(args?: SelectSubset<T, OrdenCompraDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrdenCompras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdenCompraUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrdenCompras
     * const ordenCompra = await prisma.ordenCompra.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrdenCompraUpdateManyArgs>(args: SelectSubset<T, OrdenCompraUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrdenCompras and returns the data updated in the database.
     * @param {OrdenCompraUpdateManyAndReturnArgs} args - Arguments to update many OrdenCompras.
     * @example
     * // Update many OrdenCompras
     * const ordenCompra = await prisma.ordenCompra.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OrdenCompras and only return the `id`
     * const ordenCompraWithIdOnly = await prisma.ordenCompra.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrdenCompraUpdateManyAndReturnArgs>(args: SelectSubset<T, OrdenCompraUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdenCompraPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OrdenCompra.
     * @param {OrdenCompraUpsertArgs} args - Arguments to update or create a OrdenCompra.
     * @example
     * // Update or create a OrdenCompra
     * const ordenCompra = await prisma.ordenCompra.upsert({
     *   create: {
     *     // ... data to create a OrdenCompra
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrdenCompra we want to update
     *   }
     * })
     */
    upsert<T extends OrdenCompraUpsertArgs>(args: SelectSubset<T, OrdenCompraUpsertArgs<ExtArgs>>): Prisma__OrdenCompraClient<$Result.GetResult<Prisma.$OrdenCompraPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrdenCompras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdenCompraCountArgs} args - Arguments to filter OrdenCompras to count.
     * @example
     * // Count the number of OrdenCompras
     * const count = await prisma.ordenCompra.count({
     *   where: {
     *     // ... the filter for the OrdenCompras we want to count
     *   }
     * })
    **/
    count<T extends OrdenCompraCountArgs>(
      args?: Subset<T, OrdenCompraCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrdenCompraCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrdenCompra.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdenCompraAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrdenCompraAggregateArgs>(args: Subset<T, OrdenCompraAggregateArgs>): Prisma.PrismaPromise<GetOrdenCompraAggregateType<T>>

    /**
     * Group by OrdenCompra.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdenCompraGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrdenCompraGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrdenCompraGroupByArgs['orderBy'] }
        : { orderBy?: OrdenCompraGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrdenCompraGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrdenCompraGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrdenCompra model
   */
  readonly fields: OrdenCompraFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrdenCompra.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrdenCompraClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    direccionEnvio<T extends UsuarioDireccionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDireccionDefaultArgs<ExtArgs>>): Prisma__UsuarioDireccionClient<$Result.GetResult<Prisma.$UsuarioDireccionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    items<T extends OrdenCompra$itemsArgs<ExtArgs> = {}>(args?: Subset<T, OrdenCompra$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemOrdenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OrdenCompra model
   */
  interface OrdenCompraFieldRefs {
    readonly id: FieldRef<"OrdenCompra", 'Int'>
    readonly total: FieldRef<"OrdenCompra", 'Float'>
    readonly descuento: FieldRef<"OrdenCompra", 'Float'>
    readonly fechaCompra: FieldRef<"OrdenCompra", 'String'>
    readonly usuarioId: FieldRef<"OrdenCompra", 'String'>
    readonly direccionEnvioId: FieldRef<"OrdenCompra", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * OrdenCompra findUnique
   */
  export type OrdenCompraFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdenCompra
     */
    select?: OrdenCompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdenCompra
     */
    omit?: OrdenCompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenCompraInclude<ExtArgs> | null
    /**
     * Filter, which OrdenCompra to fetch.
     */
    where: OrdenCompraWhereUniqueInput
  }

  /**
   * OrdenCompra findUniqueOrThrow
   */
  export type OrdenCompraFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdenCompra
     */
    select?: OrdenCompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdenCompra
     */
    omit?: OrdenCompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenCompraInclude<ExtArgs> | null
    /**
     * Filter, which OrdenCompra to fetch.
     */
    where: OrdenCompraWhereUniqueInput
  }

  /**
   * OrdenCompra findFirst
   */
  export type OrdenCompraFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdenCompra
     */
    select?: OrdenCompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdenCompra
     */
    omit?: OrdenCompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenCompraInclude<ExtArgs> | null
    /**
     * Filter, which OrdenCompra to fetch.
     */
    where?: OrdenCompraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrdenCompras to fetch.
     */
    orderBy?: OrdenCompraOrderByWithRelationInput | OrdenCompraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrdenCompras.
     */
    cursor?: OrdenCompraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrdenCompras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrdenCompras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrdenCompras.
     */
    distinct?: OrdenCompraScalarFieldEnum | OrdenCompraScalarFieldEnum[]
  }

  /**
   * OrdenCompra findFirstOrThrow
   */
  export type OrdenCompraFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdenCompra
     */
    select?: OrdenCompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdenCompra
     */
    omit?: OrdenCompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenCompraInclude<ExtArgs> | null
    /**
     * Filter, which OrdenCompra to fetch.
     */
    where?: OrdenCompraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrdenCompras to fetch.
     */
    orderBy?: OrdenCompraOrderByWithRelationInput | OrdenCompraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrdenCompras.
     */
    cursor?: OrdenCompraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrdenCompras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrdenCompras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrdenCompras.
     */
    distinct?: OrdenCompraScalarFieldEnum | OrdenCompraScalarFieldEnum[]
  }

  /**
   * OrdenCompra findMany
   */
  export type OrdenCompraFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdenCompra
     */
    select?: OrdenCompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdenCompra
     */
    omit?: OrdenCompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenCompraInclude<ExtArgs> | null
    /**
     * Filter, which OrdenCompras to fetch.
     */
    where?: OrdenCompraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrdenCompras to fetch.
     */
    orderBy?: OrdenCompraOrderByWithRelationInput | OrdenCompraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrdenCompras.
     */
    cursor?: OrdenCompraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrdenCompras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrdenCompras.
     */
    skip?: number
    distinct?: OrdenCompraScalarFieldEnum | OrdenCompraScalarFieldEnum[]
  }

  /**
   * OrdenCompra create
   */
  export type OrdenCompraCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdenCompra
     */
    select?: OrdenCompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdenCompra
     */
    omit?: OrdenCompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenCompraInclude<ExtArgs> | null
    /**
     * The data needed to create a OrdenCompra.
     */
    data: XOR<OrdenCompraCreateInput, OrdenCompraUncheckedCreateInput>
  }

  /**
   * OrdenCompra createMany
   */
  export type OrdenCompraCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrdenCompras.
     */
    data: OrdenCompraCreateManyInput | OrdenCompraCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrdenCompra createManyAndReturn
   */
  export type OrdenCompraCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdenCompra
     */
    select?: OrdenCompraSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrdenCompra
     */
    omit?: OrdenCompraOmit<ExtArgs> | null
    /**
     * The data used to create many OrdenCompras.
     */
    data: OrdenCompraCreateManyInput | OrdenCompraCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenCompraIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrdenCompra update
   */
  export type OrdenCompraUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdenCompra
     */
    select?: OrdenCompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdenCompra
     */
    omit?: OrdenCompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenCompraInclude<ExtArgs> | null
    /**
     * The data needed to update a OrdenCompra.
     */
    data: XOR<OrdenCompraUpdateInput, OrdenCompraUncheckedUpdateInput>
    /**
     * Choose, which OrdenCompra to update.
     */
    where: OrdenCompraWhereUniqueInput
  }

  /**
   * OrdenCompra updateMany
   */
  export type OrdenCompraUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrdenCompras.
     */
    data: XOR<OrdenCompraUpdateManyMutationInput, OrdenCompraUncheckedUpdateManyInput>
    /**
     * Filter which OrdenCompras to update
     */
    where?: OrdenCompraWhereInput
    /**
     * Limit how many OrdenCompras to update.
     */
    limit?: number
  }

  /**
   * OrdenCompra updateManyAndReturn
   */
  export type OrdenCompraUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdenCompra
     */
    select?: OrdenCompraSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrdenCompra
     */
    omit?: OrdenCompraOmit<ExtArgs> | null
    /**
     * The data used to update OrdenCompras.
     */
    data: XOR<OrdenCompraUpdateManyMutationInput, OrdenCompraUncheckedUpdateManyInput>
    /**
     * Filter which OrdenCompras to update
     */
    where?: OrdenCompraWhereInput
    /**
     * Limit how many OrdenCompras to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenCompraIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrdenCompra upsert
   */
  export type OrdenCompraUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdenCompra
     */
    select?: OrdenCompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdenCompra
     */
    omit?: OrdenCompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenCompraInclude<ExtArgs> | null
    /**
     * The filter to search for the OrdenCompra to update in case it exists.
     */
    where: OrdenCompraWhereUniqueInput
    /**
     * In case the OrdenCompra found by the `where` argument doesn't exist, create a new OrdenCompra with this data.
     */
    create: XOR<OrdenCompraCreateInput, OrdenCompraUncheckedCreateInput>
    /**
     * In case the OrdenCompra was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrdenCompraUpdateInput, OrdenCompraUncheckedUpdateInput>
  }

  /**
   * OrdenCompra delete
   */
  export type OrdenCompraDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdenCompra
     */
    select?: OrdenCompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdenCompra
     */
    omit?: OrdenCompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenCompraInclude<ExtArgs> | null
    /**
     * Filter which OrdenCompra to delete.
     */
    where: OrdenCompraWhereUniqueInput
  }

  /**
   * OrdenCompra deleteMany
   */
  export type OrdenCompraDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrdenCompras to delete
     */
    where?: OrdenCompraWhereInput
    /**
     * Limit how many OrdenCompras to delete.
     */
    limit?: number
  }

  /**
   * OrdenCompra.items
   */
  export type OrdenCompra$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemOrden
     */
    select?: ItemOrdenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemOrden
     */
    omit?: ItemOrdenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemOrdenInclude<ExtArgs> | null
    where?: ItemOrdenWhereInput
    orderBy?: ItemOrdenOrderByWithRelationInput | ItemOrdenOrderByWithRelationInput[]
    cursor?: ItemOrdenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemOrdenScalarFieldEnum | ItemOrdenScalarFieldEnum[]
  }

  /**
   * OrdenCompra without action
   */
  export type OrdenCompraDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdenCompra
     */
    select?: OrdenCompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdenCompra
     */
    omit?: OrdenCompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenCompraInclude<ExtArgs> | null
  }


  /**
   * Model Precio
   */

  export type AggregatePrecio = {
    _count: PrecioCountAggregateOutputType | null
    _avg: PrecioAvgAggregateOutputType | null
    _sum: PrecioSumAggregateOutputType | null
    _min: PrecioMinAggregateOutputType | null
    _max: PrecioMaxAggregateOutputType | null
  }

  export type PrecioAvgAggregateOutputType = {
    id: number | null
    precioCompra: number | null
    precioVenta: number | null
    detalleId: number | null
    descuentoId: number | null
  }

  export type PrecioSumAggregateOutputType = {
    id: number | null
    precioCompra: number | null
    precioVenta: number | null
    detalleId: number | null
    descuentoId: number | null
  }

  export type PrecioMinAggregateOutputType = {
    id: number | null
    precioCompra: number | null
    precioVenta: number | null
    detalleId: number | null
    descuentoId: number | null
  }

  export type PrecioMaxAggregateOutputType = {
    id: number | null
    precioCompra: number | null
    precioVenta: number | null
    detalleId: number | null
    descuentoId: number | null
  }

  export type PrecioCountAggregateOutputType = {
    id: number
    precioCompra: number
    precioVenta: number
    detalleId: number
    descuentoId: number
    _all: number
  }


  export type PrecioAvgAggregateInputType = {
    id?: true
    precioCompra?: true
    precioVenta?: true
    detalleId?: true
    descuentoId?: true
  }

  export type PrecioSumAggregateInputType = {
    id?: true
    precioCompra?: true
    precioVenta?: true
    detalleId?: true
    descuentoId?: true
  }

  export type PrecioMinAggregateInputType = {
    id?: true
    precioCompra?: true
    precioVenta?: true
    detalleId?: true
    descuentoId?: true
  }

  export type PrecioMaxAggregateInputType = {
    id?: true
    precioCompra?: true
    precioVenta?: true
    detalleId?: true
    descuentoId?: true
  }

  export type PrecioCountAggregateInputType = {
    id?: true
    precioCompra?: true
    precioVenta?: true
    detalleId?: true
    descuentoId?: true
    _all?: true
  }

  export type PrecioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Precio to aggregate.
     */
    where?: PrecioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Precios to fetch.
     */
    orderBy?: PrecioOrderByWithRelationInput | PrecioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PrecioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Precios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Precios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Precios
    **/
    _count?: true | PrecioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PrecioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PrecioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PrecioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PrecioMaxAggregateInputType
  }

  export type GetPrecioAggregateType<T extends PrecioAggregateArgs> = {
        [P in keyof T & keyof AggregatePrecio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrecio[P]>
      : GetScalarType<T[P], AggregatePrecio[P]>
  }




  export type PrecioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrecioWhereInput
    orderBy?: PrecioOrderByWithAggregationInput | PrecioOrderByWithAggregationInput[]
    by: PrecioScalarFieldEnum[] | PrecioScalarFieldEnum
    having?: PrecioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PrecioCountAggregateInputType | true
    _avg?: PrecioAvgAggregateInputType
    _sum?: PrecioSumAggregateInputType
    _min?: PrecioMinAggregateInputType
    _max?: PrecioMaxAggregateInputType
  }

  export type PrecioGroupByOutputType = {
    id: number
    precioCompra: number
    precioVenta: number
    detalleId: number
    descuentoId: number
    _count: PrecioCountAggregateOutputType | null
    _avg: PrecioAvgAggregateOutputType | null
    _sum: PrecioSumAggregateOutputType | null
    _min: PrecioMinAggregateOutputType | null
    _max: PrecioMaxAggregateOutputType | null
  }

  type GetPrecioGroupByPayload<T extends PrecioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PrecioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PrecioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PrecioGroupByOutputType[P]>
            : GetScalarType<T[P], PrecioGroupByOutputType[P]>
        }
      >
    >


  export type PrecioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    precioCompra?: boolean
    precioVenta?: boolean
    detalleId?: boolean
    descuentoId?: boolean
    detalle?: boolean | DetalleDefaultArgs<ExtArgs>
    descuento?: boolean | DescuentoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["precio"]>

  export type PrecioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    precioCompra?: boolean
    precioVenta?: boolean
    detalleId?: boolean
    descuentoId?: boolean
    detalle?: boolean | DetalleDefaultArgs<ExtArgs>
    descuento?: boolean | DescuentoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["precio"]>

  export type PrecioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    precioCompra?: boolean
    precioVenta?: boolean
    detalleId?: boolean
    descuentoId?: boolean
    detalle?: boolean | DetalleDefaultArgs<ExtArgs>
    descuento?: boolean | DescuentoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["precio"]>

  export type PrecioSelectScalar = {
    id?: boolean
    precioCompra?: boolean
    precioVenta?: boolean
    detalleId?: boolean
    descuentoId?: boolean
  }

  export type PrecioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "precioCompra" | "precioVenta" | "detalleId" | "descuentoId", ExtArgs["result"]["precio"]>
  export type PrecioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    detalle?: boolean | DetalleDefaultArgs<ExtArgs>
    descuento?: boolean | DescuentoDefaultArgs<ExtArgs>
  }
  export type PrecioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    detalle?: boolean | DetalleDefaultArgs<ExtArgs>
    descuento?: boolean | DescuentoDefaultArgs<ExtArgs>
  }
  export type PrecioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    detalle?: boolean | DetalleDefaultArgs<ExtArgs>
    descuento?: boolean | DescuentoDefaultArgs<ExtArgs>
  }

  export type $PrecioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Precio"
    objects: {
      detalle: Prisma.$DetallePayload<ExtArgs>
      descuento: Prisma.$DescuentoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      precioCompra: number
      precioVenta: number
      detalleId: number
      descuentoId: number
    }, ExtArgs["result"]["precio"]>
    composites: {}
  }

  type PrecioGetPayload<S extends boolean | null | undefined | PrecioDefaultArgs> = $Result.GetResult<Prisma.$PrecioPayload, S>

  type PrecioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PrecioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PrecioCountAggregateInputType | true
    }

  export interface PrecioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Precio'], meta: { name: 'Precio' } }
    /**
     * Find zero or one Precio that matches the filter.
     * @param {PrecioFindUniqueArgs} args - Arguments to find a Precio
     * @example
     * // Get one Precio
     * const precio = await prisma.precio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PrecioFindUniqueArgs>(args: SelectSubset<T, PrecioFindUniqueArgs<ExtArgs>>): Prisma__PrecioClient<$Result.GetResult<Prisma.$PrecioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Precio that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PrecioFindUniqueOrThrowArgs} args - Arguments to find a Precio
     * @example
     * // Get one Precio
     * const precio = await prisma.precio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PrecioFindUniqueOrThrowArgs>(args: SelectSubset<T, PrecioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PrecioClient<$Result.GetResult<Prisma.$PrecioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Precio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrecioFindFirstArgs} args - Arguments to find a Precio
     * @example
     * // Get one Precio
     * const precio = await prisma.precio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PrecioFindFirstArgs>(args?: SelectSubset<T, PrecioFindFirstArgs<ExtArgs>>): Prisma__PrecioClient<$Result.GetResult<Prisma.$PrecioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Precio that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrecioFindFirstOrThrowArgs} args - Arguments to find a Precio
     * @example
     * // Get one Precio
     * const precio = await prisma.precio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PrecioFindFirstOrThrowArgs>(args?: SelectSubset<T, PrecioFindFirstOrThrowArgs<ExtArgs>>): Prisma__PrecioClient<$Result.GetResult<Prisma.$PrecioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Precios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrecioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Precios
     * const precios = await prisma.precio.findMany()
     * 
     * // Get first 10 Precios
     * const precios = await prisma.precio.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const precioWithIdOnly = await prisma.precio.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PrecioFindManyArgs>(args?: SelectSubset<T, PrecioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrecioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Precio.
     * @param {PrecioCreateArgs} args - Arguments to create a Precio.
     * @example
     * // Create one Precio
     * const Precio = await prisma.precio.create({
     *   data: {
     *     // ... data to create a Precio
     *   }
     * })
     * 
     */
    create<T extends PrecioCreateArgs>(args: SelectSubset<T, PrecioCreateArgs<ExtArgs>>): Prisma__PrecioClient<$Result.GetResult<Prisma.$PrecioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Precios.
     * @param {PrecioCreateManyArgs} args - Arguments to create many Precios.
     * @example
     * // Create many Precios
     * const precio = await prisma.precio.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PrecioCreateManyArgs>(args?: SelectSubset<T, PrecioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Precios and returns the data saved in the database.
     * @param {PrecioCreateManyAndReturnArgs} args - Arguments to create many Precios.
     * @example
     * // Create many Precios
     * const precio = await prisma.precio.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Precios and only return the `id`
     * const precioWithIdOnly = await prisma.precio.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PrecioCreateManyAndReturnArgs>(args?: SelectSubset<T, PrecioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrecioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Precio.
     * @param {PrecioDeleteArgs} args - Arguments to delete one Precio.
     * @example
     * // Delete one Precio
     * const Precio = await prisma.precio.delete({
     *   where: {
     *     // ... filter to delete one Precio
     *   }
     * })
     * 
     */
    delete<T extends PrecioDeleteArgs>(args: SelectSubset<T, PrecioDeleteArgs<ExtArgs>>): Prisma__PrecioClient<$Result.GetResult<Prisma.$PrecioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Precio.
     * @param {PrecioUpdateArgs} args - Arguments to update one Precio.
     * @example
     * // Update one Precio
     * const precio = await prisma.precio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PrecioUpdateArgs>(args: SelectSubset<T, PrecioUpdateArgs<ExtArgs>>): Prisma__PrecioClient<$Result.GetResult<Prisma.$PrecioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Precios.
     * @param {PrecioDeleteManyArgs} args - Arguments to filter Precios to delete.
     * @example
     * // Delete a few Precios
     * const { count } = await prisma.precio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PrecioDeleteManyArgs>(args?: SelectSubset<T, PrecioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Precios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrecioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Precios
     * const precio = await prisma.precio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PrecioUpdateManyArgs>(args: SelectSubset<T, PrecioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Precios and returns the data updated in the database.
     * @param {PrecioUpdateManyAndReturnArgs} args - Arguments to update many Precios.
     * @example
     * // Update many Precios
     * const precio = await prisma.precio.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Precios and only return the `id`
     * const precioWithIdOnly = await prisma.precio.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PrecioUpdateManyAndReturnArgs>(args: SelectSubset<T, PrecioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrecioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Precio.
     * @param {PrecioUpsertArgs} args - Arguments to update or create a Precio.
     * @example
     * // Update or create a Precio
     * const precio = await prisma.precio.upsert({
     *   create: {
     *     // ... data to create a Precio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Precio we want to update
     *   }
     * })
     */
    upsert<T extends PrecioUpsertArgs>(args: SelectSubset<T, PrecioUpsertArgs<ExtArgs>>): Prisma__PrecioClient<$Result.GetResult<Prisma.$PrecioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Precios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrecioCountArgs} args - Arguments to filter Precios to count.
     * @example
     * // Count the number of Precios
     * const count = await prisma.precio.count({
     *   where: {
     *     // ... the filter for the Precios we want to count
     *   }
     * })
    **/
    count<T extends PrecioCountArgs>(
      args?: Subset<T, PrecioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PrecioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Precio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrecioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PrecioAggregateArgs>(args: Subset<T, PrecioAggregateArgs>): Prisma.PrismaPromise<GetPrecioAggregateType<T>>

    /**
     * Group by Precio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrecioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PrecioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PrecioGroupByArgs['orderBy'] }
        : { orderBy?: PrecioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PrecioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrecioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Precio model
   */
  readonly fields: PrecioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Precio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PrecioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    detalle<T extends DetalleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DetalleDefaultArgs<ExtArgs>>): Prisma__DetalleClient<$Result.GetResult<Prisma.$DetallePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    descuento<T extends DescuentoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DescuentoDefaultArgs<ExtArgs>>): Prisma__DescuentoClient<$Result.GetResult<Prisma.$DescuentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Precio model
   */
  interface PrecioFieldRefs {
    readonly id: FieldRef<"Precio", 'Int'>
    readonly precioCompra: FieldRef<"Precio", 'Float'>
    readonly precioVenta: FieldRef<"Precio", 'Float'>
    readonly detalleId: FieldRef<"Precio", 'Int'>
    readonly descuentoId: FieldRef<"Precio", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Precio findUnique
   */
  export type PrecioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Precio
     */
    select?: PrecioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Precio
     */
    omit?: PrecioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrecioInclude<ExtArgs> | null
    /**
     * Filter, which Precio to fetch.
     */
    where: PrecioWhereUniqueInput
  }

  /**
   * Precio findUniqueOrThrow
   */
  export type PrecioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Precio
     */
    select?: PrecioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Precio
     */
    omit?: PrecioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrecioInclude<ExtArgs> | null
    /**
     * Filter, which Precio to fetch.
     */
    where: PrecioWhereUniqueInput
  }

  /**
   * Precio findFirst
   */
  export type PrecioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Precio
     */
    select?: PrecioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Precio
     */
    omit?: PrecioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrecioInclude<ExtArgs> | null
    /**
     * Filter, which Precio to fetch.
     */
    where?: PrecioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Precios to fetch.
     */
    orderBy?: PrecioOrderByWithRelationInput | PrecioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Precios.
     */
    cursor?: PrecioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Precios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Precios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Precios.
     */
    distinct?: PrecioScalarFieldEnum | PrecioScalarFieldEnum[]
  }

  /**
   * Precio findFirstOrThrow
   */
  export type PrecioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Precio
     */
    select?: PrecioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Precio
     */
    omit?: PrecioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrecioInclude<ExtArgs> | null
    /**
     * Filter, which Precio to fetch.
     */
    where?: PrecioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Precios to fetch.
     */
    orderBy?: PrecioOrderByWithRelationInput | PrecioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Precios.
     */
    cursor?: PrecioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Precios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Precios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Precios.
     */
    distinct?: PrecioScalarFieldEnum | PrecioScalarFieldEnum[]
  }

  /**
   * Precio findMany
   */
  export type PrecioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Precio
     */
    select?: PrecioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Precio
     */
    omit?: PrecioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrecioInclude<ExtArgs> | null
    /**
     * Filter, which Precios to fetch.
     */
    where?: PrecioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Precios to fetch.
     */
    orderBy?: PrecioOrderByWithRelationInput | PrecioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Precios.
     */
    cursor?: PrecioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Precios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Precios.
     */
    skip?: number
    distinct?: PrecioScalarFieldEnum | PrecioScalarFieldEnum[]
  }

  /**
   * Precio create
   */
  export type PrecioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Precio
     */
    select?: PrecioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Precio
     */
    omit?: PrecioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrecioInclude<ExtArgs> | null
    /**
     * The data needed to create a Precio.
     */
    data: XOR<PrecioCreateInput, PrecioUncheckedCreateInput>
  }

  /**
   * Precio createMany
   */
  export type PrecioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Precios.
     */
    data: PrecioCreateManyInput | PrecioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Precio createManyAndReturn
   */
  export type PrecioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Precio
     */
    select?: PrecioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Precio
     */
    omit?: PrecioOmit<ExtArgs> | null
    /**
     * The data used to create many Precios.
     */
    data: PrecioCreateManyInput | PrecioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrecioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Precio update
   */
  export type PrecioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Precio
     */
    select?: PrecioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Precio
     */
    omit?: PrecioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrecioInclude<ExtArgs> | null
    /**
     * The data needed to update a Precio.
     */
    data: XOR<PrecioUpdateInput, PrecioUncheckedUpdateInput>
    /**
     * Choose, which Precio to update.
     */
    where: PrecioWhereUniqueInput
  }

  /**
   * Precio updateMany
   */
  export type PrecioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Precios.
     */
    data: XOR<PrecioUpdateManyMutationInput, PrecioUncheckedUpdateManyInput>
    /**
     * Filter which Precios to update
     */
    where?: PrecioWhereInput
    /**
     * Limit how many Precios to update.
     */
    limit?: number
  }

  /**
   * Precio updateManyAndReturn
   */
  export type PrecioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Precio
     */
    select?: PrecioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Precio
     */
    omit?: PrecioOmit<ExtArgs> | null
    /**
     * The data used to update Precios.
     */
    data: XOR<PrecioUpdateManyMutationInput, PrecioUncheckedUpdateManyInput>
    /**
     * Filter which Precios to update
     */
    where?: PrecioWhereInput
    /**
     * Limit how many Precios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrecioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Precio upsert
   */
  export type PrecioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Precio
     */
    select?: PrecioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Precio
     */
    omit?: PrecioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrecioInclude<ExtArgs> | null
    /**
     * The filter to search for the Precio to update in case it exists.
     */
    where: PrecioWhereUniqueInput
    /**
     * In case the Precio found by the `where` argument doesn't exist, create a new Precio with this data.
     */
    create: XOR<PrecioCreateInput, PrecioUncheckedCreateInput>
    /**
     * In case the Precio was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PrecioUpdateInput, PrecioUncheckedUpdateInput>
  }

  /**
   * Precio delete
   */
  export type PrecioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Precio
     */
    select?: PrecioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Precio
     */
    omit?: PrecioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrecioInclude<ExtArgs> | null
    /**
     * Filter which Precio to delete.
     */
    where: PrecioWhereUniqueInput
  }

  /**
   * Precio deleteMany
   */
  export type PrecioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Precios to delete
     */
    where?: PrecioWhereInput
    /**
     * Limit how many Precios to delete.
     */
    limit?: number
  }

  /**
   * Precio without action
   */
  export type PrecioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Precio
     */
    select?: PrecioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Precio
     */
    omit?: PrecioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrecioInclude<ExtArgs> | null
  }


  /**
   * Model Producto
   */

  export type AggregateProducto = {
    _count: ProductoCountAggregateOutputType | null
    _avg: ProductoAvgAggregateOutputType | null
    _sum: ProductoSumAggregateOutputType | null
    _min: ProductoMinAggregateOutputType | null
    _max: ProductoMaxAggregateOutputType | null
  }

  export type ProductoAvgAggregateOutputType = {
    id: number | null
    categoriaId: number | null
  }

  export type ProductoSumAggregateOutputType = {
    id: number | null
    categoriaId: number | null
  }

  export type ProductoMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    categoriaId: number | null
    tipoProducto: $Enums.TipoProducto | null
    sexo: string | null
  }

  export type ProductoMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    categoriaId: number | null
    tipoProducto: $Enums.TipoProducto | null
    sexo: string | null
  }

  export type ProductoCountAggregateOutputType = {
    id: number
    nombre: number
    categoriaId: number
    tipoProducto: number
    sexo: number
    _all: number
  }


  export type ProductoAvgAggregateInputType = {
    id?: true
    categoriaId?: true
  }

  export type ProductoSumAggregateInputType = {
    id?: true
    categoriaId?: true
  }

  export type ProductoMinAggregateInputType = {
    id?: true
    nombre?: true
    categoriaId?: true
    tipoProducto?: true
    sexo?: true
  }

  export type ProductoMaxAggregateInputType = {
    id?: true
    nombre?: true
    categoriaId?: true
    tipoProducto?: true
    sexo?: true
  }

  export type ProductoCountAggregateInputType = {
    id?: true
    nombre?: true
    categoriaId?: true
    tipoProducto?: true
    sexo?: true
    _all?: true
  }

  export type ProductoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Producto to aggregate.
     */
    where?: ProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productos to fetch.
     */
    orderBy?: ProductoOrderByWithRelationInput | ProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Productos
    **/
    _count?: true | ProductoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductoMaxAggregateInputType
  }

  export type GetProductoAggregateType<T extends ProductoAggregateArgs> = {
        [P in keyof T & keyof AggregateProducto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProducto[P]>
      : GetScalarType<T[P], AggregateProducto[P]>
  }




  export type ProductoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductoWhereInput
    orderBy?: ProductoOrderByWithAggregationInput | ProductoOrderByWithAggregationInput[]
    by: ProductoScalarFieldEnum[] | ProductoScalarFieldEnum
    having?: ProductoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductoCountAggregateInputType | true
    _avg?: ProductoAvgAggregateInputType
    _sum?: ProductoSumAggregateInputType
    _min?: ProductoMinAggregateInputType
    _max?: ProductoMaxAggregateInputType
  }

  export type ProductoGroupByOutputType = {
    id: number
    nombre: string
    categoriaId: number
    tipoProducto: $Enums.TipoProducto
    sexo: string
    _count: ProductoCountAggregateOutputType | null
    _avg: ProductoAvgAggregateOutputType | null
    _sum: ProductoSumAggregateOutputType | null
    _min: ProductoMinAggregateOutputType | null
    _max: ProductoMaxAggregateOutputType | null
  }

  type GetProductoGroupByPayload<T extends ProductoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductoGroupByOutputType[P]>
            : GetScalarType<T[P], ProductoGroupByOutputType[P]>
        }
      >
    >


  export type ProductoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    categoriaId?: boolean
    tipoProducto?: boolean
    sexo?: boolean
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
    detalles?: boolean | Producto$detallesArgs<ExtArgs>
    itemsOrden?: boolean | Producto$itemsOrdenArgs<ExtArgs>
    _count?: boolean | ProductoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["producto"]>

  export type ProductoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    categoriaId?: boolean
    tipoProducto?: boolean
    sexo?: boolean
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["producto"]>

  export type ProductoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    categoriaId?: boolean
    tipoProducto?: boolean
    sexo?: boolean
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["producto"]>

  export type ProductoSelectScalar = {
    id?: boolean
    nombre?: boolean
    categoriaId?: boolean
    tipoProducto?: boolean
    sexo?: boolean
  }

  export type ProductoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "categoriaId" | "tipoProducto" | "sexo", ExtArgs["result"]["producto"]>
  export type ProductoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
    detalles?: boolean | Producto$detallesArgs<ExtArgs>
    itemsOrden?: boolean | Producto$itemsOrdenArgs<ExtArgs>
    _count?: boolean | ProductoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
  }
  export type ProductoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
  }

  export type $ProductoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Producto"
    objects: {
      categoria: Prisma.$CategoriaPayload<ExtArgs>
      detalles: Prisma.$DetallePayload<ExtArgs>[]
      itemsOrden: Prisma.$ItemOrdenPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      categoriaId: number
      tipoProducto: $Enums.TipoProducto
      sexo: string
    }, ExtArgs["result"]["producto"]>
    composites: {}
  }

  type ProductoGetPayload<S extends boolean | null | undefined | ProductoDefaultArgs> = $Result.GetResult<Prisma.$ProductoPayload, S>

  type ProductoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductoCountAggregateInputType | true
    }

  export interface ProductoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Producto'], meta: { name: 'Producto' } }
    /**
     * Find zero or one Producto that matches the filter.
     * @param {ProductoFindUniqueArgs} args - Arguments to find a Producto
     * @example
     * // Get one Producto
     * const producto = await prisma.producto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductoFindUniqueArgs>(args: SelectSubset<T, ProductoFindUniqueArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Producto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductoFindUniqueOrThrowArgs} args - Arguments to find a Producto
     * @example
     * // Get one Producto
     * const producto = await prisma.producto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductoFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Producto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoFindFirstArgs} args - Arguments to find a Producto
     * @example
     * // Get one Producto
     * const producto = await prisma.producto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductoFindFirstArgs>(args?: SelectSubset<T, ProductoFindFirstArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Producto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoFindFirstOrThrowArgs} args - Arguments to find a Producto
     * @example
     * // Get one Producto
     * const producto = await prisma.producto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductoFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Productos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Productos
     * const productos = await prisma.producto.findMany()
     * 
     * // Get first 10 Productos
     * const productos = await prisma.producto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productoWithIdOnly = await prisma.producto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductoFindManyArgs>(args?: SelectSubset<T, ProductoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Producto.
     * @param {ProductoCreateArgs} args - Arguments to create a Producto.
     * @example
     * // Create one Producto
     * const Producto = await prisma.producto.create({
     *   data: {
     *     // ... data to create a Producto
     *   }
     * })
     * 
     */
    create<T extends ProductoCreateArgs>(args: SelectSubset<T, ProductoCreateArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Productos.
     * @param {ProductoCreateManyArgs} args - Arguments to create many Productos.
     * @example
     * // Create many Productos
     * const producto = await prisma.producto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductoCreateManyArgs>(args?: SelectSubset<T, ProductoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Productos and returns the data saved in the database.
     * @param {ProductoCreateManyAndReturnArgs} args - Arguments to create many Productos.
     * @example
     * // Create many Productos
     * const producto = await prisma.producto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Productos and only return the `id`
     * const productoWithIdOnly = await prisma.producto.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductoCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Producto.
     * @param {ProductoDeleteArgs} args - Arguments to delete one Producto.
     * @example
     * // Delete one Producto
     * const Producto = await prisma.producto.delete({
     *   where: {
     *     // ... filter to delete one Producto
     *   }
     * })
     * 
     */
    delete<T extends ProductoDeleteArgs>(args: SelectSubset<T, ProductoDeleteArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Producto.
     * @param {ProductoUpdateArgs} args - Arguments to update one Producto.
     * @example
     * // Update one Producto
     * const producto = await prisma.producto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductoUpdateArgs>(args: SelectSubset<T, ProductoUpdateArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Productos.
     * @param {ProductoDeleteManyArgs} args - Arguments to filter Productos to delete.
     * @example
     * // Delete a few Productos
     * const { count } = await prisma.producto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductoDeleteManyArgs>(args?: SelectSubset<T, ProductoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Productos
     * const producto = await prisma.producto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductoUpdateManyArgs>(args: SelectSubset<T, ProductoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Productos and returns the data updated in the database.
     * @param {ProductoUpdateManyAndReturnArgs} args - Arguments to update many Productos.
     * @example
     * // Update many Productos
     * const producto = await prisma.producto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Productos and only return the `id`
     * const productoWithIdOnly = await prisma.producto.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductoUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Producto.
     * @param {ProductoUpsertArgs} args - Arguments to update or create a Producto.
     * @example
     * // Update or create a Producto
     * const producto = await prisma.producto.upsert({
     *   create: {
     *     // ... data to create a Producto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Producto we want to update
     *   }
     * })
     */
    upsert<T extends ProductoUpsertArgs>(args: SelectSubset<T, ProductoUpsertArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoCountArgs} args - Arguments to filter Productos to count.
     * @example
     * // Count the number of Productos
     * const count = await prisma.producto.count({
     *   where: {
     *     // ... the filter for the Productos we want to count
     *   }
     * })
    **/
    count<T extends ProductoCountArgs>(
      args?: Subset<T, ProductoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Producto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductoAggregateArgs>(args: Subset<T, ProductoAggregateArgs>): Prisma.PrismaPromise<GetProductoAggregateType<T>>

    /**
     * Group by Producto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductoGroupByArgs['orderBy'] }
        : { orderBy?: ProductoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Producto model
   */
  readonly fields: ProductoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Producto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categoria<T extends CategoriaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoriaDefaultArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    detalles<T extends Producto$detallesArgs<ExtArgs> = {}>(args?: Subset<T, Producto$detallesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetallePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    itemsOrden<T extends Producto$itemsOrdenArgs<ExtArgs> = {}>(args?: Subset<T, Producto$itemsOrdenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemOrdenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Producto model
   */
  interface ProductoFieldRefs {
    readonly id: FieldRef<"Producto", 'Int'>
    readonly nombre: FieldRef<"Producto", 'String'>
    readonly categoriaId: FieldRef<"Producto", 'Int'>
    readonly tipoProducto: FieldRef<"Producto", 'TipoProducto'>
    readonly sexo: FieldRef<"Producto", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Producto findUnique
   */
  export type ProductoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter, which Producto to fetch.
     */
    where: ProductoWhereUniqueInput
  }

  /**
   * Producto findUniqueOrThrow
   */
  export type ProductoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter, which Producto to fetch.
     */
    where: ProductoWhereUniqueInput
  }

  /**
   * Producto findFirst
   */
  export type ProductoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter, which Producto to fetch.
     */
    where?: ProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productos to fetch.
     */
    orderBy?: ProductoOrderByWithRelationInput | ProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Productos.
     */
    cursor?: ProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Productos.
     */
    distinct?: ProductoScalarFieldEnum | ProductoScalarFieldEnum[]
  }

  /**
   * Producto findFirstOrThrow
   */
  export type ProductoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter, which Producto to fetch.
     */
    where?: ProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productos to fetch.
     */
    orderBy?: ProductoOrderByWithRelationInput | ProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Productos.
     */
    cursor?: ProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Productos.
     */
    distinct?: ProductoScalarFieldEnum | ProductoScalarFieldEnum[]
  }

  /**
   * Producto findMany
   */
  export type ProductoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter, which Productos to fetch.
     */
    where?: ProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productos to fetch.
     */
    orderBy?: ProductoOrderByWithRelationInput | ProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Productos.
     */
    cursor?: ProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productos.
     */
    skip?: number
    distinct?: ProductoScalarFieldEnum | ProductoScalarFieldEnum[]
  }

  /**
   * Producto create
   */
  export type ProductoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * The data needed to create a Producto.
     */
    data: XOR<ProductoCreateInput, ProductoUncheckedCreateInput>
  }

  /**
   * Producto createMany
   */
  export type ProductoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Productos.
     */
    data: ProductoCreateManyInput | ProductoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Producto createManyAndReturn
   */
  export type ProductoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * The data used to create many Productos.
     */
    data: ProductoCreateManyInput | ProductoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Producto update
   */
  export type ProductoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * The data needed to update a Producto.
     */
    data: XOR<ProductoUpdateInput, ProductoUncheckedUpdateInput>
    /**
     * Choose, which Producto to update.
     */
    where: ProductoWhereUniqueInput
  }

  /**
   * Producto updateMany
   */
  export type ProductoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Productos.
     */
    data: XOR<ProductoUpdateManyMutationInput, ProductoUncheckedUpdateManyInput>
    /**
     * Filter which Productos to update
     */
    where?: ProductoWhereInput
    /**
     * Limit how many Productos to update.
     */
    limit?: number
  }

  /**
   * Producto updateManyAndReturn
   */
  export type ProductoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * The data used to update Productos.
     */
    data: XOR<ProductoUpdateManyMutationInput, ProductoUncheckedUpdateManyInput>
    /**
     * Filter which Productos to update
     */
    where?: ProductoWhereInput
    /**
     * Limit how many Productos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Producto upsert
   */
  export type ProductoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * The filter to search for the Producto to update in case it exists.
     */
    where: ProductoWhereUniqueInput
    /**
     * In case the Producto found by the `where` argument doesn't exist, create a new Producto with this data.
     */
    create: XOR<ProductoCreateInput, ProductoUncheckedCreateInput>
    /**
     * In case the Producto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductoUpdateInput, ProductoUncheckedUpdateInput>
  }

  /**
   * Producto delete
   */
  export type ProductoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter which Producto to delete.
     */
    where: ProductoWhereUniqueInput
  }

  /**
   * Producto deleteMany
   */
  export type ProductoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Productos to delete
     */
    where?: ProductoWhereInput
    /**
     * Limit how many Productos to delete.
     */
    limit?: number
  }

  /**
   * Producto.detalles
   */
  export type Producto$detallesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detalle
     */
    select?: DetalleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detalle
     */
    omit?: DetalleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleInclude<ExtArgs> | null
    where?: DetalleWhereInput
    orderBy?: DetalleOrderByWithRelationInput | DetalleOrderByWithRelationInput[]
    cursor?: DetalleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DetalleScalarFieldEnum | DetalleScalarFieldEnum[]
  }

  /**
   * Producto.itemsOrden
   */
  export type Producto$itemsOrdenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemOrden
     */
    select?: ItemOrdenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemOrden
     */
    omit?: ItemOrdenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemOrdenInclude<ExtArgs> | null
    where?: ItemOrdenWhereInput
    orderBy?: ItemOrdenOrderByWithRelationInput | ItemOrdenOrderByWithRelationInput[]
    cursor?: ItemOrdenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemOrdenScalarFieldEnum | ItemOrdenScalarFieldEnum[]
  }

  /**
   * Producto without action
   */
  export type ProductoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
  }


  /**
   * Model Talle
   */

  export type AggregateTalle = {
    _count: TalleCountAggregateOutputType | null
    _avg: TalleAvgAggregateOutputType | null
    _sum: TalleSumAggregateOutputType | null
    _min: TalleMinAggregateOutputType | null
    _max: TalleMaxAggregateOutputType | null
  }

  export type TalleAvgAggregateOutputType = {
    id: number | null
  }

  export type TalleSumAggregateOutputType = {
    id: number | null
  }

  export type TalleMinAggregateOutputType = {
    id: number | null
    talle: string | null
  }

  export type TalleMaxAggregateOutputType = {
    id: number | null
    talle: string | null
  }

  export type TalleCountAggregateOutputType = {
    id: number
    talle: number
    _all: number
  }


  export type TalleAvgAggregateInputType = {
    id?: true
  }

  export type TalleSumAggregateInputType = {
    id?: true
  }

  export type TalleMinAggregateInputType = {
    id?: true
    talle?: true
  }

  export type TalleMaxAggregateInputType = {
    id?: true
    talle?: true
  }

  export type TalleCountAggregateInputType = {
    id?: true
    talle?: true
    _all?: true
  }

  export type TalleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Talle to aggregate.
     */
    where?: TalleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Talles to fetch.
     */
    orderBy?: TalleOrderByWithRelationInput | TalleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TalleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Talles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Talles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Talles
    **/
    _count?: true | TalleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TalleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TalleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TalleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TalleMaxAggregateInputType
  }

  export type GetTalleAggregateType<T extends TalleAggregateArgs> = {
        [P in keyof T & keyof AggregateTalle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTalle[P]>
      : GetScalarType<T[P], AggregateTalle[P]>
  }




  export type TalleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TalleWhereInput
    orderBy?: TalleOrderByWithAggregationInput | TalleOrderByWithAggregationInput[]
    by: TalleScalarFieldEnum[] | TalleScalarFieldEnum
    having?: TalleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TalleCountAggregateInputType | true
    _avg?: TalleAvgAggregateInputType
    _sum?: TalleSumAggregateInputType
    _min?: TalleMinAggregateInputType
    _max?: TalleMaxAggregateInputType
  }

  export type TalleGroupByOutputType = {
    id: number
    talle: string
    _count: TalleCountAggregateOutputType | null
    _avg: TalleAvgAggregateOutputType | null
    _sum: TalleSumAggregateOutputType | null
    _min: TalleMinAggregateOutputType | null
    _max: TalleMaxAggregateOutputType | null
  }

  type GetTalleGroupByPayload<T extends TalleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TalleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TalleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TalleGroupByOutputType[P]>
            : GetScalarType<T[P], TalleGroupByOutputType[P]>
        }
      >
    >


  export type TalleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    talle?: boolean
    detalles?: boolean | Talle$detallesArgs<ExtArgs>
    _count?: boolean | TalleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["talle"]>

  export type TalleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    talle?: boolean
  }, ExtArgs["result"]["talle"]>

  export type TalleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    talle?: boolean
  }, ExtArgs["result"]["talle"]>

  export type TalleSelectScalar = {
    id?: boolean
    talle?: boolean
  }

  export type TalleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "talle", ExtArgs["result"]["talle"]>
  export type TalleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    detalles?: boolean | Talle$detallesArgs<ExtArgs>
    _count?: boolean | TalleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TalleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TalleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TallePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Talle"
    objects: {
      detalles: Prisma.$DetallePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      talle: string
    }, ExtArgs["result"]["talle"]>
    composites: {}
  }

  type TalleGetPayload<S extends boolean | null | undefined | TalleDefaultArgs> = $Result.GetResult<Prisma.$TallePayload, S>

  type TalleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TalleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TalleCountAggregateInputType | true
    }

  export interface TalleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Talle'], meta: { name: 'Talle' } }
    /**
     * Find zero or one Talle that matches the filter.
     * @param {TalleFindUniqueArgs} args - Arguments to find a Talle
     * @example
     * // Get one Talle
     * const talle = await prisma.talle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TalleFindUniqueArgs>(args: SelectSubset<T, TalleFindUniqueArgs<ExtArgs>>): Prisma__TalleClient<$Result.GetResult<Prisma.$TallePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Talle that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TalleFindUniqueOrThrowArgs} args - Arguments to find a Talle
     * @example
     * // Get one Talle
     * const talle = await prisma.talle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TalleFindUniqueOrThrowArgs>(args: SelectSubset<T, TalleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TalleClient<$Result.GetResult<Prisma.$TallePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Talle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TalleFindFirstArgs} args - Arguments to find a Talle
     * @example
     * // Get one Talle
     * const talle = await prisma.talle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TalleFindFirstArgs>(args?: SelectSubset<T, TalleFindFirstArgs<ExtArgs>>): Prisma__TalleClient<$Result.GetResult<Prisma.$TallePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Talle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TalleFindFirstOrThrowArgs} args - Arguments to find a Talle
     * @example
     * // Get one Talle
     * const talle = await prisma.talle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TalleFindFirstOrThrowArgs>(args?: SelectSubset<T, TalleFindFirstOrThrowArgs<ExtArgs>>): Prisma__TalleClient<$Result.GetResult<Prisma.$TallePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Talles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TalleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Talles
     * const talles = await prisma.talle.findMany()
     * 
     * // Get first 10 Talles
     * const talles = await prisma.talle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const talleWithIdOnly = await prisma.talle.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TalleFindManyArgs>(args?: SelectSubset<T, TalleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TallePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Talle.
     * @param {TalleCreateArgs} args - Arguments to create a Talle.
     * @example
     * // Create one Talle
     * const Talle = await prisma.talle.create({
     *   data: {
     *     // ... data to create a Talle
     *   }
     * })
     * 
     */
    create<T extends TalleCreateArgs>(args: SelectSubset<T, TalleCreateArgs<ExtArgs>>): Prisma__TalleClient<$Result.GetResult<Prisma.$TallePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Talles.
     * @param {TalleCreateManyArgs} args - Arguments to create many Talles.
     * @example
     * // Create many Talles
     * const talle = await prisma.talle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TalleCreateManyArgs>(args?: SelectSubset<T, TalleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Talles and returns the data saved in the database.
     * @param {TalleCreateManyAndReturnArgs} args - Arguments to create many Talles.
     * @example
     * // Create many Talles
     * const talle = await prisma.talle.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Talles and only return the `id`
     * const talleWithIdOnly = await prisma.talle.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TalleCreateManyAndReturnArgs>(args?: SelectSubset<T, TalleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TallePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Talle.
     * @param {TalleDeleteArgs} args - Arguments to delete one Talle.
     * @example
     * // Delete one Talle
     * const Talle = await prisma.talle.delete({
     *   where: {
     *     // ... filter to delete one Talle
     *   }
     * })
     * 
     */
    delete<T extends TalleDeleteArgs>(args: SelectSubset<T, TalleDeleteArgs<ExtArgs>>): Prisma__TalleClient<$Result.GetResult<Prisma.$TallePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Talle.
     * @param {TalleUpdateArgs} args - Arguments to update one Talle.
     * @example
     * // Update one Talle
     * const talle = await prisma.talle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TalleUpdateArgs>(args: SelectSubset<T, TalleUpdateArgs<ExtArgs>>): Prisma__TalleClient<$Result.GetResult<Prisma.$TallePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Talles.
     * @param {TalleDeleteManyArgs} args - Arguments to filter Talles to delete.
     * @example
     * // Delete a few Talles
     * const { count } = await prisma.talle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TalleDeleteManyArgs>(args?: SelectSubset<T, TalleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Talles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TalleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Talles
     * const talle = await prisma.talle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TalleUpdateManyArgs>(args: SelectSubset<T, TalleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Talles and returns the data updated in the database.
     * @param {TalleUpdateManyAndReturnArgs} args - Arguments to update many Talles.
     * @example
     * // Update many Talles
     * const talle = await prisma.talle.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Talles and only return the `id`
     * const talleWithIdOnly = await prisma.talle.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TalleUpdateManyAndReturnArgs>(args: SelectSubset<T, TalleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TallePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Talle.
     * @param {TalleUpsertArgs} args - Arguments to update or create a Talle.
     * @example
     * // Update or create a Talle
     * const talle = await prisma.talle.upsert({
     *   create: {
     *     // ... data to create a Talle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Talle we want to update
     *   }
     * })
     */
    upsert<T extends TalleUpsertArgs>(args: SelectSubset<T, TalleUpsertArgs<ExtArgs>>): Prisma__TalleClient<$Result.GetResult<Prisma.$TallePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Talles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TalleCountArgs} args - Arguments to filter Talles to count.
     * @example
     * // Count the number of Talles
     * const count = await prisma.talle.count({
     *   where: {
     *     // ... the filter for the Talles we want to count
     *   }
     * })
    **/
    count<T extends TalleCountArgs>(
      args?: Subset<T, TalleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TalleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Talle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TalleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TalleAggregateArgs>(args: Subset<T, TalleAggregateArgs>): Prisma.PrismaPromise<GetTalleAggregateType<T>>

    /**
     * Group by Talle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TalleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TalleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TalleGroupByArgs['orderBy'] }
        : { orderBy?: TalleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TalleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTalleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Talle model
   */
  readonly fields: TalleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Talle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TalleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    detalles<T extends Talle$detallesArgs<ExtArgs> = {}>(args?: Subset<T, Talle$detallesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetallePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Talle model
   */
  interface TalleFieldRefs {
    readonly id: FieldRef<"Talle", 'Int'>
    readonly talle: FieldRef<"Talle", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Talle findUnique
   */
  export type TalleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Talle
     */
    select?: TalleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Talle
     */
    omit?: TalleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TalleInclude<ExtArgs> | null
    /**
     * Filter, which Talle to fetch.
     */
    where: TalleWhereUniqueInput
  }

  /**
   * Talle findUniqueOrThrow
   */
  export type TalleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Talle
     */
    select?: TalleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Talle
     */
    omit?: TalleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TalleInclude<ExtArgs> | null
    /**
     * Filter, which Talle to fetch.
     */
    where: TalleWhereUniqueInput
  }

  /**
   * Talle findFirst
   */
  export type TalleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Talle
     */
    select?: TalleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Talle
     */
    omit?: TalleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TalleInclude<ExtArgs> | null
    /**
     * Filter, which Talle to fetch.
     */
    where?: TalleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Talles to fetch.
     */
    orderBy?: TalleOrderByWithRelationInput | TalleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Talles.
     */
    cursor?: TalleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Talles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Talles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Talles.
     */
    distinct?: TalleScalarFieldEnum | TalleScalarFieldEnum[]
  }

  /**
   * Talle findFirstOrThrow
   */
  export type TalleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Talle
     */
    select?: TalleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Talle
     */
    omit?: TalleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TalleInclude<ExtArgs> | null
    /**
     * Filter, which Talle to fetch.
     */
    where?: TalleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Talles to fetch.
     */
    orderBy?: TalleOrderByWithRelationInput | TalleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Talles.
     */
    cursor?: TalleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Talles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Talles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Talles.
     */
    distinct?: TalleScalarFieldEnum | TalleScalarFieldEnum[]
  }

  /**
   * Talle findMany
   */
  export type TalleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Talle
     */
    select?: TalleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Talle
     */
    omit?: TalleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TalleInclude<ExtArgs> | null
    /**
     * Filter, which Talles to fetch.
     */
    where?: TalleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Talles to fetch.
     */
    orderBy?: TalleOrderByWithRelationInput | TalleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Talles.
     */
    cursor?: TalleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Talles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Talles.
     */
    skip?: number
    distinct?: TalleScalarFieldEnum | TalleScalarFieldEnum[]
  }

  /**
   * Talle create
   */
  export type TalleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Talle
     */
    select?: TalleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Talle
     */
    omit?: TalleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TalleInclude<ExtArgs> | null
    /**
     * The data needed to create a Talle.
     */
    data: XOR<TalleCreateInput, TalleUncheckedCreateInput>
  }

  /**
   * Talle createMany
   */
  export type TalleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Talles.
     */
    data: TalleCreateManyInput | TalleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Talle createManyAndReturn
   */
  export type TalleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Talle
     */
    select?: TalleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Talle
     */
    omit?: TalleOmit<ExtArgs> | null
    /**
     * The data used to create many Talles.
     */
    data: TalleCreateManyInput | TalleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Talle update
   */
  export type TalleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Talle
     */
    select?: TalleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Talle
     */
    omit?: TalleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TalleInclude<ExtArgs> | null
    /**
     * The data needed to update a Talle.
     */
    data: XOR<TalleUpdateInput, TalleUncheckedUpdateInput>
    /**
     * Choose, which Talle to update.
     */
    where: TalleWhereUniqueInput
  }

  /**
   * Talle updateMany
   */
  export type TalleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Talles.
     */
    data: XOR<TalleUpdateManyMutationInput, TalleUncheckedUpdateManyInput>
    /**
     * Filter which Talles to update
     */
    where?: TalleWhereInput
    /**
     * Limit how many Talles to update.
     */
    limit?: number
  }

  /**
   * Talle updateManyAndReturn
   */
  export type TalleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Talle
     */
    select?: TalleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Talle
     */
    omit?: TalleOmit<ExtArgs> | null
    /**
     * The data used to update Talles.
     */
    data: XOR<TalleUpdateManyMutationInput, TalleUncheckedUpdateManyInput>
    /**
     * Filter which Talles to update
     */
    where?: TalleWhereInput
    /**
     * Limit how many Talles to update.
     */
    limit?: number
  }

  /**
   * Talle upsert
   */
  export type TalleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Talle
     */
    select?: TalleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Talle
     */
    omit?: TalleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TalleInclude<ExtArgs> | null
    /**
     * The filter to search for the Talle to update in case it exists.
     */
    where: TalleWhereUniqueInput
    /**
     * In case the Talle found by the `where` argument doesn't exist, create a new Talle with this data.
     */
    create: XOR<TalleCreateInput, TalleUncheckedCreateInput>
    /**
     * In case the Talle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TalleUpdateInput, TalleUncheckedUpdateInput>
  }

  /**
   * Talle delete
   */
  export type TalleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Talle
     */
    select?: TalleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Talle
     */
    omit?: TalleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TalleInclude<ExtArgs> | null
    /**
     * Filter which Talle to delete.
     */
    where: TalleWhereUniqueInput
  }

  /**
   * Talle deleteMany
   */
  export type TalleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Talles to delete
     */
    where?: TalleWhereInput
    /**
     * Limit how many Talles to delete.
     */
    limit?: number
  }

  /**
   * Talle.detalles
   */
  export type Talle$detallesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detalle
     */
    select?: DetalleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detalle
     */
    omit?: DetalleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleInclude<ExtArgs> | null
    where?: DetalleWhereInput
    orderBy?: DetalleOrderByWithRelationInput | DetalleOrderByWithRelationInput[]
    cursor?: DetalleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DetalleScalarFieldEnum | DetalleScalarFieldEnum[]
  }

  /**
   * Talle without action
   */
  export type TalleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Talle
     */
    select?: TalleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Talle
     */
    omit?: TalleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TalleInclude<ExtArgs> | null
  }


  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: string | null
    nombre: string | null
    contraseña: string | null
    email: string | null
    dni: string | null
    rol: $Enums.Rol | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: string | null
    nombre: string | null
    contraseña: string | null
    email: string | null
    dni: string | null
    rol: $Enums.Rol | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    nombre: number
    contraseña: number
    email: number
    dni: number
    rol: number
    _all: number
  }


  export type UsuarioMinAggregateInputType = {
    id?: true
    nombre?: true
    contraseña?: true
    email?: true
    dni?: true
    rol?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    nombre?: true
    contraseña?: true
    email?: true
    dni?: true
    rol?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    nombre?: true
    contraseña?: true
    email?: true
    dni?: true
    rol?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: string
    nombre: string
    contraseña: string
    email: string
    dni: string
    rol: $Enums.Rol
    _count: UsuarioCountAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    contraseña?: boolean
    email?: boolean
    dni?: boolean
    rol?: boolean
    direcciones?: boolean | Usuario$direccionesArgs<ExtArgs>
    ordenes?: boolean | Usuario$ordenesArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    contraseña?: boolean
    email?: boolean
    dni?: boolean
    rol?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    contraseña?: boolean
    email?: boolean
    dni?: boolean
    rol?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    nombre?: boolean
    contraseña?: boolean
    email?: boolean
    dni?: boolean
    rol?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "contraseña" | "email" | "dni" | "rol", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    direcciones?: boolean | Usuario$direccionesArgs<ExtArgs>
    ordenes?: boolean | Usuario$ordenesArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      direcciones: Prisma.$UsuarioDireccionPayload<ExtArgs>[]
      ordenes: Prisma.$OrdenCompraPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nombre: string
      contraseña: string
      email: string
      dni: string
      rol: $Enums.Rol
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    direcciones<T extends Usuario$direccionesArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$direccionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioDireccionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ordenes<T extends Usuario$ordenesArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$ordenesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdenCompraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'String'>
    readonly nombre: FieldRef<"Usuario", 'String'>
    readonly contraseña: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly dni: FieldRef<"Usuario", 'String'>
    readonly rol: FieldRef<"Usuario", 'Rol'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.direcciones
   */
  export type Usuario$direccionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioDireccion
     */
    select?: UsuarioDireccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioDireccion
     */
    omit?: UsuarioDireccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioDireccionInclude<ExtArgs> | null
    where?: UsuarioDireccionWhereInput
    orderBy?: UsuarioDireccionOrderByWithRelationInput | UsuarioDireccionOrderByWithRelationInput[]
    cursor?: UsuarioDireccionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsuarioDireccionScalarFieldEnum | UsuarioDireccionScalarFieldEnum[]
  }

  /**
   * Usuario.ordenes
   */
  export type Usuario$ordenesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdenCompra
     */
    select?: OrdenCompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdenCompra
     */
    omit?: OrdenCompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenCompraInclude<ExtArgs> | null
    where?: OrdenCompraWhereInput
    orderBy?: OrdenCompraOrderByWithRelationInput | OrdenCompraOrderByWithRelationInput[]
    cursor?: OrdenCompraWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdenCompraScalarFieldEnum | OrdenCompraScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model UsuarioDireccion
   */

  export type AggregateUsuarioDireccion = {
    _count: UsuarioDireccionCountAggregateOutputType | null
    _avg: UsuarioDireccionAvgAggregateOutputType | null
    _sum: UsuarioDireccionSumAggregateOutputType | null
    _min: UsuarioDireccionMinAggregateOutputType | null
    _max: UsuarioDireccionMaxAggregateOutputType | null
  }

  export type UsuarioDireccionAvgAggregateOutputType = {
    id: number | null
    direccionId: number | null
  }

  export type UsuarioDireccionSumAggregateOutputType = {
    id: number | null
    direccionId: number | null
  }

  export type UsuarioDireccionMinAggregateOutputType = {
    id: number | null
    usuarioId: string | null
    direccionId: number | null
  }

  export type UsuarioDireccionMaxAggregateOutputType = {
    id: number | null
    usuarioId: string | null
    direccionId: number | null
  }

  export type UsuarioDireccionCountAggregateOutputType = {
    id: number
    usuarioId: number
    direccionId: number
    _all: number
  }


  export type UsuarioDireccionAvgAggregateInputType = {
    id?: true
    direccionId?: true
  }

  export type UsuarioDireccionSumAggregateInputType = {
    id?: true
    direccionId?: true
  }

  export type UsuarioDireccionMinAggregateInputType = {
    id?: true
    usuarioId?: true
    direccionId?: true
  }

  export type UsuarioDireccionMaxAggregateInputType = {
    id?: true
    usuarioId?: true
    direccionId?: true
  }

  export type UsuarioDireccionCountAggregateInputType = {
    id?: true
    usuarioId?: true
    direccionId?: true
    _all?: true
  }

  export type UsuarioDireccionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UsuarioDireccion to aggregate.
     */
    where?: UsuarioDireccionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsuarioDireccions to fetch.
     */
    orderBy?: UsuarioDireccionOrderByWithRelationInput | UsuarioDireccionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioDireccionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsuarioDireccions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsuarioDireccions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UsuarioDireccions
    **/
    _count?: true | UsuarioDireccionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioDireccionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioDireccionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioDireccionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioDireccionMaxAggregateInputType
  }

  export type GetUsuarioDireccionAggregateType<T extends UsuarioDireccionAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuarioDireccion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuarioDireccion[P]>
      : GetScalarType<T[P], AggregateUsuarioDireccion[P]>
  }




  export type UsuarioDireccionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioDireccionWhereInput
    orderBy?: UsuarioDireccionOrderByWithAggregationInput | UsuarioDireccionOrderByWithAggregationInput[]
    by: UsuarioDireccionScalarFieldEnum[] | UsuarioDireccionScalarFieldEnum
    having?: UsuarioDireccionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioDireccionCountAggregateInputType | true
    _avg?: UsuarioDireccionAvgAggregateInputType
    _sum?: UsuarioDireccionSumAggregateInputType
    _min?: UsuarioDireccionMinAggregateInputType
    _max?: UsuarioDireccionMaxAggregateInputType
  }

  export type UsuarioDireccionGroupByOutputType = {
    id: number
    usuarioId: string
    direccionId: number
    _count: UsuarioDireccionCountAggregateOutputType | null
    _avg: UsuarioDireccionAvgAggregateOutputType | null
    _sum: UsuarioDireccionSumAggregateOutputType | null
    _min: UsuarioDireccionMinAggregateOutputType | null
    _max: UsuarioDireccionMaxAggregateOutputType | null
  }

  type GetUsuarioDireccionGroupByPayload<T extends UsuarioDireccionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioDireccionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioDireccionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioDireccionGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioDireccionGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioDireccionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    direccionId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    direccion?: boolean | DireccionDefaultArgs<ExtArgs>
    ordenesEnvio?: boolean | UsuarioDireccion$ordenesEnvioArgs<ExtArgs>
    _count?: boolean | UsuarioDireccionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuarioDireccion"]>

  export type UsuarioDireccionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    direccionId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    direccion?: boolean | DireccionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuarioDireccion"]>

  export type UsuarioDireccionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    direccionId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    direccion?: boolean | DireccionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuarioDireccion"]>

  export type UsuarioDireccionSelectScalar = {
    id?: boolean
    usuarioId?: boolean
    direccionId?: boolean
  }

  export type UsuarioDireccionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "usuarioId" | "direccionId", ExtArgs["result"]["usuarioDireccion"]>
  export type UsuarioDireccionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    direccion?: boolean | DireccionDefaultArgs<ExtArgs>
    ordenesEnvio?: boolean | UsuarioDireccion$ordenesEnvioArgs<ExtArgs>
    _count?: boolean | UsuarioDireccionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioDireccionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    direccion?: boolean | DireccionDefaultArgs<ExtArgs>
  }
  export type UsuarioDireccionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    direccion?: boolean | DireccionDefaultArgs<ExtArgs>
  }

  export type $UsuarioDireccionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UsuarioDireccion"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      direccion: Prisma.$DireccionPayload<ExtArgs>
      ordenesEnvio: Prisma.$OrdenCompraPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      usuarioId: string
      direccionId: number
    }, ExtArgs["result"]["usuarioDireccion"]>
    composites: {}
  }

  type UsuarioDireccionGetPayload<S extends boolean | null | undefined | UsuarioDireccionDefaultArgs> = $Result.GetResult<Prisma.$UsuarioDireccionPayload, S>

  type UsuarioDireccionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioDireccionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioDireccionCountAggregateInputType | true
    }

  export interface UsuarioDireccionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UsuarioDireccion'], meta: { name: 'UsuarioDireccion' } }
    /**
     * Find zero or one UsuarioDireccion that matches the filter.
     * @param {UsuarioDireccionFindUniqueArgs} args - Arguments to find a UsuarioDireccion
     * @example
     * // Get one UsuarioDireccion
     * const usuarioDireccion = await prisma.usuarioDireccion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioDireccionFindUniqueArgs>(args: SelectSubset<T, UsuarioDireccionFindUniqueArgs<ExtArgs>>): Prisma__UsuarioDireccionClient<$Result.GetResult<Prisma.$UsuarioDireccionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UsuarioDireccion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioDireccionFindUniqueOrThrowArgs} args - Arguments to find a UsuarioDireccion
     * @example
     * // Get one UsuarioDireccion
     * const usuarioDireccion = await prisma.usuarioDireccion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioDireccionFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioDireccionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioDireccionClient<$Result.GetResult<Prisma.$UsuarioDireccionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UsuarioDireccion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioDireccionFindFirstArgs} args - Arguments to find a UsuarioDireccion
     * @example
     * // Get one UsuarioDireccion
     * const usuarioDireccion = await prisma.usuarioDireccion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioDireccionFindFirstArgs>(args?: SelectSubset<T, UsuarioDireccionFindFirstArgs<ExtArgs>>): Prisma__UsuarioDireccionClient<$Result.GetResult<Prisma.$UsuarioDireccionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UsuarioDireccion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioDireccionFindFirstOrThrowArgs} args - Arguments to find a UsuarioDireccion
     * @example
     * // Get one UsuarioDireccion
     * const usuarioDireccion = await prisma.usuarioDireccion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioDireccionFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioDireccionFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioDireccionClient<$Result.GetResult<Prisma.$UsuarioDireccionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UsuarioDireccions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioDireccionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UsuarioDireccions
     * const usuarioDireccions = await prisma.usuarioDireccion.findMany()
     * 
     * // Get first 10 UsuarioDireccions
     * const usuarioDireccions = await prisma.usuarioDireccion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioDireccionWithIdOnly = await prisma.usuarioDireccion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioDireccionFindManyArgs>(args?: SelectSubset<T, UsuarioDireccionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioDireccionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UsuarioDireccion.
     * @param {UsuarioDireccionCreateArgs} args - Arguments to create a UsuarioDireccion.
     * @example
     * // Create one UsuarioDireccion
     * const UsuarioDireccion = await prisma.usuarioDireccion.create({
     *   data: {
     *     // ... data to create a UsuarioDireccion
     *   }
     * })
     * 
     */
    create<T extends UsuarioDireccionCreateArgs>(args: SelectSubset<T, UsuarioDireccionCreateArgs<ExtArgs>>): Prisma__UsuarioDireccionClient<$Result.GetResult<Prisma.$UsuarioDireccionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UsuarioDireccions.
     * @param {UsuarioDireccionCreateManyArgs} args - Arguments to create many UsuarioDireccions.
     * @example
     * // Create many UsuarioDireccions
     * const usuarioDireccion = await prisma.usuarioDireccion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioDireccionCreateManyArgs>(args?: SelectSubset<T, UsuarioDireccionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UsuarioDireccions and returns the data saved in the database.
     * @param {UsuarioDireccionCreateManyAndReturnArgs} args - Arguments to create many UsuarioDireccions.
     * @example
     * // Create many UsuarioDireccions
     * const usuarioDireccion = await prisma.usuarioDireccion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UsuarioDireccions and only return the `id`
     * const usuarioDireccionWithIdOnly = await prisma.usuarioDireccion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioDireccionCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioDireccionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioDireccionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UsuarioDireccion.
     * @param {UsuarioDireccionDeleteArgs} args - Arguments to delete one UsuarioDireccion.
     * @example
     * // Delete one UsuarioDireccion
     * const UsuarioDireccion = await prisma.usuarioDireccion.delete({
     *   where: {
     *     // ... filter to delete one UsuarioDireccion
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDireccionDeleteArgs>(args: SelectSubset<T, UsuarioDireccionDeleteArgs<ExtArgs>>): Prisma__UsuarioDireccionClient<$Result.GetResult<Prisma.$UsuarioDireccionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UsuarioDireccion.
     * @param {UsuarioDireccionUpdateArgs} args - Arguments to update one UsuarioDireccion.
     * @example
     * // Update one UsuarioDireccion
     * const usuarioDireccion = await prisma.usuarioDireccion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioDireccionUpdateArgs>(args: SelectSubset<T, UsuarioDireccionUpdateArgs<ExtArgs>>): Prisma__UsuarioDireccionClient<$Result.GetResult<Prisma.$UsuarioDireccionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UsuarioDireccions.
     * @param {UsuarioDireccionDeleteManyArgs} args - Arguments to filter UsuarioDireccions to delete.
     * @example
     * // Delete a few UsuarioDireccions
     * const { count } = await prisma.usuarioDireccion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDireccionDeleteManyArgs>(args?: SelectSubset<T, UsuarioDireccionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UsuarioDireccions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioDireccionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UsuarioDireccions
     * const usuarioDireccion = await prisma.usuarioDireccion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioDireccionUpdateManyArgs>(args: SelectSubset<T, UsuarioDireccionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UsuarioDireccions and returns the data updated in the database.
     * @param {UsuarioDireccionUpdateManyAndReturnArgs} args - Arguments to update many UsuarioDireccions.
     * @example
     * // Update many UsuarioDireccions
     * const usuarioDireccion = await prisma.usuarioDireccion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UsuarioDireccions and only return the `id`
     * const usuarioDireccionWithIdOnly = await prisma.usuarioDireccion.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsuarioDireccionUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioDireccionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioDireccionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UsuarioDireccion.
     * @param {UsuarioDireccionUpsertArgs} args - Arguments to update or create a UsuarioDireccion.
     * @example
     * // Update or create a UsuarioDireccion
     * const usuarioDireccion = await prisma.usuarioDireccion.upsert({
     *   create: {
     *     // ... data to create a UsuarioDireccion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UsuarioDireccion we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioDireccionUpsertArgs>(args: SelectSubset<T, UsuarioDireccionUpsertArgs<ExtArgs>>): Prisma__UsuarioDireccionClient<$Result.GetResult<Prisma.$UsuarioDireccionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UsuarioDireccions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioDireccionCountArgs} args - Arguments to filter UsuarioDireccions to count.
     * @example
     * // Count the number of UsuarioDireccions
     * const count = await prisma.usuarioDireccion.count({
     *   where: {
     *     // ... the filter for the UsuarioDireccions we want to count
     *   }
     * })
    **/
    count<T extends UsuarioDireccionCountArgs>(
      args?: Subset<T, UsuarioDireccionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioDireccionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UsuarioDireccion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioDireccionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuarioDireccionAggregateArgs>(args: Subset<T, UsuarioDireccionAggregateArgs>): Prisma.PrismaPromise<GetUsuarioDireccionAggregateType<T>>

    /**
     * Group by UsuarioDireccion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioDireccionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsuarioDireccionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioDireccionGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioDireccionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsuarioDireccionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioDireccionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UsuarioDireccion model
   */
  readonly fields: UsuarioDireccionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UsuarioDireccion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioDireccionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    direccion<T extends DireccionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DireccionDefaultArgs<ExtArgs>>): Prisma__DireccionClient<$Result.GetResult<Prisma.$DireccionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ordenesEnvio<T extends UsuarioDireccion$ordenesEnvioArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDireccion$ordenesEnvioArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdenCompraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UsuarioDireccion model
   */
  interface UsuarioDireccionFieldRefs {
    readonly id: FieldRef<"UsuarioDireccion", 'Int'>
    readonly usuarioId: FieldRef<"UsuarioDireccion", 'String'>
    readonly direccionId: FieldRef<"UsuarioDireccion", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * UsuarioDireccion findUnique
   */
  export type UsuarioDireccionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioDireccion
     */
    select?: UsuarioDireccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioDireccion
     */
    omit?: UsuarioDireccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioDireccionInclude<ExtArgs> | null
    /**
     * Filter, which UsuarioDireccion to fetch.
     */
    where: UsuarioDireccionWhereUniqueInput
  }

  /**
   * UsuarioDireccion findUniqueOrThrow
   */
  export type UsuarioDireccionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioDireccion
     */
    select?: UsuarioDireccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioDireccion
     */
    omit?: UsuarioDireccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioDireccionInclude<ExtArgs> | null
    /**
     * Filter, which UsuarioDireccion to fetch.
     */
    where: UsuarioDireccionWhereUniqueInput
  }

  /**
   * UsuarioDireccion findFirst
   */
  export type UsuarioDireccionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioDireccion
     */
    select?: UsuarioDireccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioDireccion
     */
    omit?: UsuarioDireccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioDireccionInclude<ExtArgs> | null
    /**
     * Filter, which UsuarioDireccion to fetch.
     */
    where?: UsuarioDireccionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsuarioDireccions to fetch.
     */
    orderBy?: UsuarioDireccionOrderByWithRelationInput | UsuarioDireccionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UsuarioDireccions.
     */
    cursor?: UsuarioDireccionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsuarioDireccions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsuarioDireccions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UsuarioDireccions.
     */
    distinct?: UsuarioDireccionScalarFieldEnum | UsuarioDireccionScalarFieldEnum[]
  }

  /**
   * UsuarioDireccion findFirstOrThrow
   */
  export type UsuarioDireccionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioDireccion
     */
    select?: UsuarioDireccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioDireccion
     */
    omit?: UsuarioDireccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioDireccionInclude<ExtArgs> | null
    /**
     * Filter, which UsuarioDireccion to fetch.
     */
    where?: UsuarioDireccionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsuarioDireccions to fetch.
     */
    orderBy?: UsuarioDireccionOrderByWithRelationInput | UsuarioDireccionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UsuarioDireccions.
     */
    cursor?: UsuarioDireccionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsuarioDireccions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsuarioDireccions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UsuarioDireccions.
     */
    distinct?: UsuarioDireccionScalarFieldEnum | UsuarioDireccionScalarFieldEnum[]
  }

  /**
   * UsuarioDireccion findMany
   */
  export type UsuarioDireccionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioDireccion
     */
    select?: UsuarioDireccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioDireccion
     */
    omit?: UsuarioDireccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioDireccionInclude<ExtArgs> | null
    /**
     * Filter, which UsuarioDireccions to fetch.
     */
    where?: UsuarioDireccionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsuarioDireccions to fetch.
     */
    orderBy?: UsuarioDireccionOrderByWithRelationInput | UsuarioDireccionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UsuarioDireccions.
     */
    cursor?: UsuarioDireccionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsuarioDireccions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsuarioDireccions.
     */
    skip?: number
    distinct?: UsuarioDireccionScalarFieldEnum | UsuarioDireccionScalarFieldEnum[]
  }

  /**
   * UsuarioDireccion create
   */
  export type UsuarioDireccionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioDireccion
     */
    select?: UsuarioDireccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioDireccion
     */
    omit?: UsuarioDireccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioDireccionInclude<ExtArgs> | null
    /**
     * The data needed to create a UsuarioDireccion.
     */
    data: XOR<UsuarioDireccionCreateInput, UsuarioDireccionUncheckedCreateInput>
  }

  /**
   * UsuarioDireccion createMany
   */
  export type UsuarioDireccionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UsuarioDireccions.
     */
    data: UsuarioDireccionCreateManyInput | UsuarioDireccionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UsuarioDireccion createManyAndReturn
   */
  export type UsuarioDireccionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioDireccion
     */
    select?: UsuarioDireccionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioDireccion
     */
    omit?: UsuarioDireccionOmit<ExtArgs> | null
    /**
     * The data used to create many UsuarioDireccions.
     */
    data: UsuarioDireccionCreateManyInput | UsuarioDireccionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioDireccionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UsuarioDireccion update
   */
  export type UsuarioDireccionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioDireccion
     */
    select?: UsuarioDireccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioDireccion
     */
    omit?: UsuarioDireccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioDireccionInclude<ExtArgs> | null
    /**
     * The data needed to update a UsuarioDireccion.
     */
    data: XOR<UsuarioDireccionUpdateInput, UsuarioDireccionUncheckedUpdateInput>
    /**
     * Choose, which UsuarioDireccion to update.
     */
    where: UsuarioDireccionWhereUniqueInput
  }

  /**
   * UsuarioDireccion updateMany
   */
  export type UsuarioDireccionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UsuarioDireccions.
     */
    data: XOR<UsuarioDireccionUpdateManyMutationInput, UsuarioDireccionUncheckedUpdateManyInput>
    /**
     * Filter which UsuarioDireccions to update
     */
    where?: UsuarioDireccionWhereInput
    /**
     * Limit how many UsuarioDireccions to update.
     */
    limit?: number
  }

  /**
   * UsuarioDireccion updateManyAndReturn
   */
  export type UsuarioDireccionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioDireccion
     */
    select?: UsuarioDireccionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioDireccion
     */
    omit?: UsuarioDireccionOmit<ExtArgs> | null
    /**
     * The data used to update UsuarioDireccions.
     */
    data: XOR<UsuarioDireccionUpdateManyMutationInput, UsuarioDireccionUncheckedUpdateManyInput>
    /**
     * Filter which UsuarioDireccions to update
     */
    where?: UsuarioDireccionWhereInput
    /**
     * Limit how many UsuarioDireccions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioDireccionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UsuarioDireccion upsert
   */
  export type UsuarioDireccionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioDireccion
     */
    select?: UsuarioDireccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioDireccion
     */
    omit?: UsuarioDireccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioDireccionInclude<ExtArgs> | null
    /**
     * The filter to search for the UsuarioDireccion to update in case it exists.
     */
    where: UsuarioDireccionWhereUniqueInput
    /**
     * In case the UsuarioDireccion found by the `where` argument doesn't exist, create a new UsuarioDireccion with this data.
     */
    create: XOR<UsuarioDireccionCreateInput, UsuarioDireccionUncheckedCreateInput>
    /**
     * In case the UsuarioDireccion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioDireccionUpdateInput, UsuarioDireccionUncheckedUpdateInput>
  }

  /**
   * UsuarioDireccion delete
   */
  export type UsuarioDireccionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioDireccion
     */
    select?: UsuarioDireccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioDireccion
     */
    omit?: UsuarioDireccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioDireccionInclude<ExtArgs> | null
    /**
     * Filter which UsuarioDireccion to delete.
     */
    where: UsuarioDireccionWhereUniqueInput
  }

  /**
   * UsuarioDireccion deleteMany
   */
  export type UsuarioDireccionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UsuarioDireccions to delete
     */
    where?: UsuarioDireccionWhereInput
    /**
     * Limit how many UsuarioDireccions to delete.
     */
    limit?: number
  }

  /**
   * UsuarioDireccion.ordenesEnvio
   */
  export type UsuarioDireccion$ordenesEnvioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdenCompra
     */
    select?: OrdenCompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdenCompra
     */
    omit?: OrdenCompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenCompraInclude<ExtArgs> | null
    where?: OrdenCompraWhereInput
    orderBy?: OrdenCompraOrderByWithRelationInput | OrdenCompraOrderByWithRelationInput[]
    cursor?: OrdenCompraWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdenCompraScalarFieldEnum | OrdenCompraScalarFieldEnum[]
  }

  /**
   * UsuarioDireccion without action
   */
  export type UsuarioDireccionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioDireccion
     */
    select?: UsuarioDireccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioDireccion
     */
    omit?: UsuarioDireccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioDireccionInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CategoriaScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre'
  };

  export type CategoriaScalarFieldEnum = (typeof CategoriaScalarFieldEnum)[keyof typeof CategoriaScalarFieldEnum]


  export const DescuentoScalarFieldEnum: {
    id: 'id',
    porcentaje: 'porcentaje',
    fechaInicio: 'fechaInicio',
    fechaFin: 'fechaFin'
  };

  export type DescuentoScalarFieldEnum = (typeof DescuentoScalarFieldEnum)[keyof typeof DescuentoScalarFieldEnum]


  export const DetalleScalarFieldEnum: {
    id: 'id',
    color: 'color',
    estado: 'estado',
    stock: 'stock',
    productoId: 'productoId',
    talleId: 'talleId'
  };

  export type DetalleScalarFieldEnum = (typeof DetalleScalarFieldEnum)[keyof typeof DetalleScalarFieldEnum]


  export const DireccionScalarFieldEnum: {
    id: 'id',
    localidad: 'localidad',
    pais: 'pais',
    provincia: 'provincia',
    departamento: 'departamento',
    codigoPostal: 'codigoPostal'
  };

  export type DireccionScalarFieldEnum = (typeof DireccionScalarFieldEnum)[keyof typeof DireccionScalarFieldEnum]


  export const ImgScalarFieldEnum: {
    id: 'id',
    url: 'url',
    detalleId: 'detalleId'
  };

  export type ImgScalarFieldEnum = (typeof ImgScalarFieldEnum)[keyof typeof ImgScalarFieldEnum]


  export const ItemOrdenScalarFieldEnum: {
    id: 'id',
    cantidad: 'cantidad',
    ordenCompraId: 'ordenCompraId',
    productoId: 'productoId'
  };

  export type ItemOrdenScalarFieldEnum = (typeof ItemOrdenScalarFieldEnum)[keyof typeof ItemOrdenScalarFieldEnum]


  export const OrdenCompraScalarFieldEnum: {
    id: 'id',
    total: 'total',
    descuento: 'descuento',
    fechaCompra: 'fechaCompra',
    usuarioId: 'usuarioId',
    direccionEnvioId: 'direccionEnvioId'
  };

  export type OrdenCompraScalarFieldEnum = (typeof OrdenCompraScalarFieldEnum)[keyof typeof OrdenCompraScalarFieldEnum]


  export const PrecioScalarFieldEnum: {
    id: 'id',
    precioCompra: 'precioCompra',
    precioVenta: 'precioVenta',
    detalleId: 'detalleId',
    descuentoId: 'descuentoId'
  };

  export type PrecioScalarFieldEnum = (typeof PrecioScalarFieldEnum)[keyof typeof PrecioScalarFieldEnum]


  export const ProductoScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    categoriaId: 'categoriaId',
    tipoProducto: 'tipoProducto',
    sexo: 'sexo'
  };

  export type ProductoScalarFieldEnum = (typeof ProductoScalarFieldEnum)[keyof typeof ProductoScalarFieldEnum]


  export const TalleScalarFieldEnum: {
    id: 'id',
    talle: 'talle'
  };

  export type TalleScalarFieldEnum = (typeof TalleScalarFieldEnum)[keyof typeof TalleScalarFieldEnum]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    contraseña: 'contraseña',
    email: 'email',
    dni: 'dni',
    rol: 'rol'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const UsuarioDireccionScalarFieldEnum: {
    id: 'id',
    usuarioId: 'usuarioId',
    direccionId: 'direccionId'
  };

  export type UsuarioDireccionScalarFieldEnum = (typeof UsuarioDireccionScalarFieldEnum)[keyof typeof UsuarioDireccionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'TipoProducto'
   */
  export type EnumTipoProductoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoProducto'>
    


  /**
   * Reference to a field of type 'TipoProducto[]'
   */
  export type ListEnumTipoProductoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoProducto[]'>
    


  /**
   * Reference to a field of type 'Rol'
   */
  export type EnumRolFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Rol'>
    


  /**
   * Reference to a field of type 'Rol[]'
   */
  export type ListEnumRolFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Rol[]'>
    
  /**
   * Deep Input Types
   */


  export type CategoriaWhereInput = {
    AND?: CategoriaWhereInput | CategoriaWhereInput[]
    OR?: CategoriaWhereInput[]
    NOT?: CategoriaWhereInput | CategoriaWhereInput[]
    id?: IntFilter<"Categoria"> | number
    nombre?: StringFilter<"Categoria"> | string
    productos?: ProductoListRelationFilter
  }

  export type CategoriaOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    productos?: ProductoOrderByRelationAggregateInput
  }

  export type CategoriaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CategoriaWhereInput | CategoriaWhereInput[]
    OR?: CategoriaWhereInput[]
    NOT?: CategoriaWhereInput | CategoriaWhereInput[]
    nombre?: StringFilter<"Categoria"> | string
    productos?: ProductoListRelationFilter
  }, "id">

  export type CategoriaOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    _count?: CategoriaCountOrderByAggregateInput
    _avg?: CategoriaAvgOrderByAggregateInput
    _max?: CategoriaMaxOrderByAggregateInput
    _min?: CategoriaMinOrderByAggregateInput
    _sum?: CategoriaSumOrderByAggregateInput
  }

  export type CategoriaScalarWhereWithAggregatesInput = {
    AND?: CategoriaScalarWhereWithAggregatesInput | CategoriaScalarWhereWithAggregatesInput[]
    OR?: CategoriaScalarWhereWithAggregatesInput[]
    NOT?: CategoriaScalarWhereWithAggregatesInput | CategoriaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Categoria"> | number
    nombre?: StringWithAggregatesFilter<"Categoria"> | string
  }

  export type DescuentoWhereInput = {
    AND?: DescuentoWhereInput | DescuentoWhereInput[]
    OR?: DescuentoWhereInput[]
    NOT?: DescuentoWhereInput | DescuentoWhereInput[]
    id?: IntFilter<"Descuento"> | number
    porcentaje?: FloatFilter<"Descuento"> | number
    fechaInicio?: DateTimeFilter<"Descuento"> | Date | string
    fechaFin?: DateTimeFilter<"Descuento"> | Date | string
    precios?: PrecioListRelationFilter
  }

  export type DescuentoOrderByWithRelationInput = {
    id?: SortOrder
    porcentaje?: SortOrder
    fechaInicio?: SortOrder
    fechaFin?: SortOrder
    precios?: PrecioOrderByRelationAggregateInput
  }

  export type DescuentoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DescuentoWhereInput | DescuentoWhereInput[]
    OR?: DescuentoWhereInput[]
    NOT?: DescuentoWhereInput | DescuentoWhereInput[]
    porcentaje?: FloatFilter<"Descuento"> | number
    fechaInicio?: DateTimeFilter<"Descuento"> | Date | string
    fechaFin?: DateTimeFilter<"Descuento"> | Date | string
    precios?: PrecioListRelationFilter
  }, "id">

  export type DescuentoOrderByWithAggregationInput = {
    id?: SortOrder
    porcentaje?: SortOrder
    fechaInicio?: SortOrder
    fechaFin?: SortOrder
    _count?: DescuentoCountOrderByAggregateInput
    _avg?: DescuentoAvgOrderByAggregateInput
    _max?: DescuentoMaxOrderByAggregateInput
    _min?: DescuentoMinOrderByAggregateInput
    _sum?: DescuentoSumOrderByAggregateInput
  }

  export type DescuentoScalarWhereWithAggregatesInput = {
    AND?: DescuentoScalarWhereWithAggregatesInput | DescuentoScalarWhereWithAggregatesInput[]
    OR?: DescuentoScalarWhereWithAggregatesInput[]
    NOT?: DescuentoScalarWhereWithAggregatesInput | DescuentoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Descuento"> | number
    porcentaje?: FloatWithAggregatesFilter<"Descuento"> | number
    fechaInicio?: DateTimeWithAggregatesFilter<"Descuento"> | Date | string
    fechaFin?: DateTimeWithAggregatesFilter<"Descuento"> | Date | string
  }

  export type DetalleWhereInput = {
    AND?: DetalleWhereInput | DetalleWhereInput[]
    OR?: DetalleWhereInput[]
    NOT?: DetalleWhereInput | DetalleWhereInput[]
    id?: IntFilter<"Detalle"> | number
    color?: StringFilter<"Detalle"> | string
    estado?: StringFilter<"Detalle"> | string
    stock?: IntFilter<"Detalle"> | number
    productoId?: IntFilter<"Detalle"> | number
    talleId?: IntFilter<"Detalle"> | number
    producto?: XOR<ProductoScalarRelationFilter, ProductoWhereInput>
    talle?: XOR<TalleScalarRelationFilter, TalleWhereInput>
    imgs?: ImgListRelationFilter
    precios?: PrecioListRelationFilter
  }

  export type DetalleOrderByWithRelationInput = {
    id?: SortOrder
    color?: SortOrder
    estado?: SortOrder
    stock?: SortOrder
    productoId?: SortOrder
    talleId?: SortOrder
    producto?: ProductoOrderByWithRelationInput
    talle?: TalleOrderByWithRelationInput
    imgs?: ImgOrderByRelationAggregateInput
    precios?: PrecioOrderByRelationAggregateInput
  }

  export type DetalleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DetalleWhereInput | DetalleWhereInput[]
    OR?: DetalleWhereInput[]
    NOT?: DetalleWhereInput | DetalleWhereInput[]
    color?: StringFilter<"Detalle"> | string
    estado?: StringFilter<"Detalle"> | string
    stock?: IntFilter<"Detalle"> | number
    productoId?: IntFilter<"Detalle"> | number
    talleId?: IntFilter<"Detalle"> | number
    producto?: XOR<ProductoScalarRelationFilter, ProductoWhereInput>
    talle?: XOR<TalleScalarRelationFilter, TalleWhereInput>
    imgs?: ImgListRelationFilter
    precios?: PrecioListRelationFilter
  }, "id">

  export type DetalleOrderByWithAggregationInput = {
    id?: SortOrder
    color?: SortOrder
    estado?: SortOrder
    stock?: SortOrder
    productoId?: SortOrder
    talleId?: SortOrder
    _count?: DetalleCountOrderByAggregateInput
    _avg?: DetalleAvgOrderByAggregateInput
    _max?: DetalleMaxOrderByAggregateInput
    _min?: DetalleMinOrderByAggregateInput
    _sum?: DetalleSumOrderByAggregateInput
  }

  export type DetalleScalarWhereWithAggregatesInput = {
    AND?: DetalleScalarWhereWithAggregatesInput | DetalleScalarWhereWithAggregatesInput[]
    OR?: DetalleScalarWhereWithAggregatesInput[]
    NOT?: DetalleScalarWhereWithAggregatesInput | DetalleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Detalle"> | number
    color?: StringWithAggregatesFilter<"Detalle"> | string
    estado?: StringWithAggregatesFilter<"Detalle"> | string
    stock?: IntWithAggregatesFilter<"Detalle"> | number
    productoId?: IntWithAggregatesFilter<"Detalle"> | number
    talleId?: IntWithAggregatesFilter<"Detalle"> | number
  }

  export type DireccionWhereInput = {
    AND?: DireccionWhereInput | DireccionWhereInput[]
    OR?: DireccionWhereInput[]
    NOT?: DireccionWhereInput | DireccionWhereInput[]
    id?: IntFilter<"Direccion"> | number
    localidad?: StringFilter<"Direccion"> | string
    pais?: StringFilter<"Direccion"> | string
    provincia?: StringFilter<"Direccion"> | string
    departamento?: StringFilter<"Direccion"> | string
    codigoPostal?: StringFilter<"Direccion"> | string
    usuarios?: UsuarioDireccionListRelationFilter
  }

  export type DireccionOrderByWithRelationInput = {
    id?: SortOrder
    localidad?: SortOrder
    pais?: SortOrder
    provincia?: SortOrder
    departamento?: SortOrder
    codigoPostal?: SortOrder
    usuarios?: UsuarioDireccionOrderByRelationAggregateInput
  }

  export type DireccionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DireccionWhereInput | DireccionWhereInput[]
    OR?: DireccionWhereInput[]
    NOT?: DireccionWhereInput | DireccionWhereInput[]
    localidad?: StringFilter<"Direccion"> | string
    pais?: StringFilter<"Direccion"> | string
    provincia?: StringFilter<"Direccion"> | string
    departamento?: StringFilter<"Direccion"> | string
    codigoPostal?: StringFilter<"Direccion"> | string
    usuarios?: UsuarioDireccionListRelationFilter
  }, "id">

  export type DireccionOrderByWithAggregationInput = {
    id?: SortOrder
    localidad?: SortOrder
    pais?: SortOrder
    provincia?: SortOrder
    departamento?: SortOrder
    codigoPostal?: SortOrder
    _count?: DireccionCountOrderByAggregateInput
    _avg?: DireccionAvgOrderByAggregateInput
    _max?: DireccionMaxOrderByAggregateInput
    _min?: DireccionMinOrderByAggregateInput
    _sum?: DireccionSumOrderByAggregateInput
  }

  export type DireccionScalarWhereWithAggregatesInput = {
    AND?: DireccionScalarWhereWithAggregatesInput | DireccionScalarWhereWithAggregatesInput[]
    OR?: DireccionScalarWhereWithAggregatesInput[]
    NOT?: DireccionScalarWhereWithAggregatesInput | DireccionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Direccion"> | number
    localidad?: StringWithAggregatesFilter<"Direccion"> | string
    pais?: StringWithAggregatesFilter<"Direccion"> | string
    provincia?: StringWithAggregatesFilter<"Direccion"> | string
    departamento?: StringWithAggregatesFilter<"Direccion"> | string
    codigoPostal?: StringWithAggregatesFilter<"Direccion"> | string
  }

  export type ImgWhereInput = {
    AND?: ImgWhereInput | ImgWhereInput[]
    OR?: ImgWhereInput[]
    NOT?: ImgWhereInput | ImgWhereInput[]
    id?: IntFilter<"Img"> | number
    url?: StringFilter<"Img"> | string
    detalleId?: IntFilter<"Img"> | number
    detalle?: XOR<DetalleScalarRelationFilter, DetalleWhereInput>
  }

  export type ImgOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    detalleId?: SortOrder
    detalle?: DetalleOrderByWithRelationInput
  }

  export type ImgWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ImgWhereInput | ImgWhereInput[]
    OR?: ImgWhereInput[]
    NOT?: ImgWhereInput | ImgWhereInput[]
    url?: StringFilter<"Img"> | string
    detalleId?: IntFilter<"Img"> | number
    detalle?: XOR<DetalleScalarRelationFilter, DetalleWhereInput>
  }, "id">

  export type ImgOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    detalleId?: SortOrder
    _count?: ImgCountOrderByAggregateInput
    _avg?: ImgAvgOrderByAggregateInput
    _max?: ImgMaxOrderByAggregateInput
    _min?: ImgMinOrderByAggregateInput
    _sum?: ImgSumOrderByAggregateInput
  }

  export type ImgScalarWhereWithAggregatesInput = {
    AND?: ImgScalarWhereWithAggregatesInput | ImgScalarWhereWithAggregatesInput[]
    OR?: ImgScalarWhereWithAggregatesInput[]
    NOT?: ImgScalarWhereWithAggregatesInput | ImgScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Img"> | number
    url?: StringWithAggregatesFilter<"Img"> | string
    detalleId?: IntWithAggregatesFilter<"Img"> | number
  }

  export type ItemOrdenWhereInput = {
    AND?: ItemOrdenWhereInput | ItemOrdenWhereInput[]
    OR?: ItemOrdenWhereInput[]
    NOT?: ItemOrdenWhereInput | ItemOrdenWhereInput[]
    id?: IntFilter<"ItemOrden"> | number
    cantidad?: IntFilter<"ItemOrden"> | number
    ordenCompraId?: IntFilter<"ItemOrden"> | number
    productoId?: IntFilter<"ItemOrden"> | number
    ordenCompra?: XOR<OrdenCompraScalarRelationFilter, OrdenCompraWhereInput>
    producto?: XOR<ProductoScalarRelationFilter, ProductoWhereInput>
  }

  export type ItemOrdenOrderByWithRelationInput = {
    id?: SortOrder
    cantidad?: SortOrder
    ordenCompraId?: SortOrder
    productoId?: SortOrder
    ordenCompra?: OrdenCompraOrderByWithRelationInput
    producto?: ProductoOrderByWithRelationInput
  }

  export type ItemOrdenWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ItemOrdenWhereInput | ItemOrdenWhereInput[]
    OR?: ItemOrdenWhereInput[]
    NOT?: ItemOrdenWhereInput | ItemOrdenWhereInput[]
    cantidad?: IntFilter<"ItemOrden"> | number
    ordenCompraId?: IntFilter<"ItemOrden"> | number
    productoId?: IntFilter<"ItemOrden"> | number
    ordenCompra?: XOR<OrdenCompraScalarRelationFilter, OrdenCompraWhereInput>
    producto?: XOR<ProductoScalarRelationFilter, ProductoWhereInput>
  }, "id">

  export type ItemOrdenOrderByWithAggregationInput = {
    id?: SortOrder
    cantidad?: SortOrder
    ordenCompraId?: SortOrder
    productoId?: SortOrder
    _count?: ItemOrdenCountOrderByAggregateInput
    _avg?: ItemOrdenAvgOrderByAggregateInput
    _max?: ItemOrdenMaxOrderByAggregateInput
    _min?: ItemOrdenMinOrderByAggregateInput
    _sum?: ItemOrdenSumOrderByAggregateInput
  }

  export type ItemOrdenScalarWhereWithAggregatesInput = {
    AND?: ItemOrdenScalarWhereWithAggregatesInput | ItemOrdenScalarWhereWithAggregatesInput[]
    OR?: ItemOrdenScalarWhereWithAggregatesInput[]
    NOT?: ItemOrdenScalarWhereWithAggregatesInput | ItemOrdenScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ItemOrden"> | number
    cantidad?: IntWithAggregatesFilter<"ItemOrden"> | number
    ordenCompraId?: IntWithAggregatesFilter<"ItemOrden"> | number
    productoId?: IntWithAggregatesFilter<"ItemOrden"> | number
  }

  export type OrdenCompraWhereInput = {
    AND?: OrdenCompraWhereInput | OrdenCompraWhereInput[]
    OR?: OrdenCompraWhereInput[]
    NOT?: OrdenCompraWhereInput | OrdenCompraWhereInput[]
    id?: IntFilter<"OrdenCompra"> | number
    total?: FloatFilter<"OrdenCompra"> | number
    descuento?: FloatFilter<"OrdenCompra"> | number
    fechaCompra?: StringFilter<"OrdenCompra"> | string
    usuarioId?: StringFilter<"OrdenCompra"> | string
    direccionEnvioId?: IntFilter<"OrdenCompra"> | number
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    direccionEnvio?: XOR<UsuarioDireccionScalarRelationFilter, UsuarioDireccionWhereInput>
    items?: ItemOrdenListRelationFilter
  }

  export type OrdenCompraOrderByWithRelationInput = {
    id?: SortOrder
    total?: SortOrder
    descuento?: SortOrder
    fechaCompra?: SortOrder
    usuarioId?: SortOrder
    direccionEnvioId?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    direccionEnvio?: UsuarioDireccionOrderByWithRelationInput
    items?: ItemOrdenOrderByRelationAggregateInput
  }

  export type OrdenCompraWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OrdenCompraWhereInput | OrdenCompraWhereInput[]
    OR?: OrdenCompraWhereInput[]
    NOT?: OrdenCompraWhereInput | OrdenCompraWhereInput[]
    total?: FloatFilter<"OrdenCompra"> | number
    descuento?: FloatFilter<"OrdenCompra"> | number
    fechaCompra?: StringFilter<"OrdenCompra"> | string
    usuarioId?: StringFilter<"OrdenCompra"> | string
    direccionEnvioId?: IntFilter<"OrdenCompra"> | number
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    direccionEnvio?: XOR<UsuarioDireccionScalarRelationFilter, UsuarioDireccionWhereInput>
    items?: ItemOrdenListRelationFilter
  }, "id">

  export type OrdenCompraOrderByWithAggregationInput = {
    id?: SortOrder
    total?: SortOrder
    descuento?: SortOrder
    fechaCompra?: SortOrder
    usuarioId?: SortOrder
    direccionEnvioId?: SortOrder
    _count?: OrdenCompraCountOrderByAggregateInput
    _avg?: OrdenCompraAvgOrderByAggregateInput
    _max?: OrdenCompraMaxOrderByAggregateInput
    _min?: OrdenCompraMinOrderByAggregateInput
    _sum?: OrdenCompraSumOrderByAggregateInput
  }

  export type OrdenCompraScalarWhereWithAggregatesInput = {
    AND?: OrdenCompraScalarWhereWithAggregatesInput | OrdenCompraScalarWhereWithAggregatesInput[]
    OR?: OrdenCompraScalarWhereWithAggregatesInput[]
    NOT?: OrdenCompraScalarWhereWithAggregatesInput | OrdenCompraScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"OrdenCompra"> | number
    total?: FloatWithAggregatesFilter<"OrdenCompra"> | number
    descuento?: FloatWithAggregatesFilter<"OrdenCompra"> | number
    fechaCompra?: StringWithAggregatesFilter<"OrdenCompra"> | string
    usuarioId?: StringWithAggregatesFilter<"OrdenCompra"> | string
    direccionEnvioId?: IntWithAggregatesFilter<"OrdenCompra"> | number
  }

  export type PrecioWhereInput = {
    AND?: PrecioWhereInput | PrecioWhereInput[]
    OR?: PrecioWhereInput[]
    NOT?: PrecioWhereInput | PrecioWhereInput[]
    id?: IntFilter<"Precio"> | number
    precioCompra?: FloatFilter<"Precio"> | number
    precioVenta?: FloatFilter<"Precio"> | number
    detalleId?: IntFilter<"Precio"> | number
    descuentoId?: IntFilter<"Precio"> | number
    detalle?: XOR<DetalleScalarRelationFilter, DetalleWhereInput>
    descuento?: XOR<DescuentoScalarRelationFilter, DescuentoWhereInput>
  }

  export type PrecioOrderByWithRelationInput = {
    id?: SortOrder
    precioCompra?: SortOrder
    precioVenta?: SortOrder
    detalleId?: SortOrder
    descuentoId?: SortOrder
    detalle?: DetalleOrderByWithRelationInput
    descuento?: DescuentoOrderByWithRelationInput
  }

  export type PrecioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PrecioWhereInput | PrecioWhereInput[]
    OR?: PrecioWhereInput[]
    NOT?: PrecioWhereInput | PrecioWhereInput[]
    precioCompra?: FloatFilter<"Precio"> | number
    precioVenta?: FloatFilter<"Precio"> | number
    detalleId?: IntFilter<"Precio"> | number
    descuentoId?: IntFilter<"Precio"> | number
    detalle?: XOR<DetalleScalarRelationFilter, DetalleWhereInput>
    descuento?: XOR<DescuentoScalarRelationFilter, DescuentoWhereInput>
  }, "id">

  export type PrecioOrderByWithAggregationInput = {
    id?: SortOrder
    precioCompra?: SortOrder
    precioVenta?: SortOrder
    detalleId?: SortOrder
    descuentoId?: SortOrder
    _count?: PrecioCountOrderByAggregateInput
    _avg?: PrecioAvgOrderByAggregateInput
    _max?: PrecioMaxOrderByAggregateInput
    _min?: PrecioMinOrderByAggregateInput
    _sum?: PrecioSumOrderByAggregateInput
  }

  export type PrecioScalarWhereWithAggregatesInput = {
    AND?: PrecioScalarWhereWithAggregatesInput | PrecioScalarWhereWithAggregatesInput[]
    OR?: PrecioScalarWhereWithAggregatesInput[]
    NOT?: PrecioScalarWhereWithAggregatesInput | PrecioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Precio"> | number
    precioCompra?: FloatWithAggregatesFilter<"Precio"> | number
    precioVenta?: FloatWithAggregatesFilter<"Precio"> | number
    detalleId?: IntWithAggregatesFilter<"Precio"> | number
    descuentoId?: IntWithAggregatesFilter<"Precio"> | number
  }

  export type ProductoWhereInput = {
    AND?: ProductoWhereInput | ProductoWhereInput[]
    OR?: ProductoWhereInput[]
    NOT?: ProductoWhereInput | ProductoWhereInput[]
    id?: IntFilter<"Producto"> | number
    nombre?: StringFilter<"Producto"> | string
    categoriaId?: IntFilter<"Producto"> | number
    tipoProducto?: EnumTipoProductoFilter<"Producto"> | $Enums.TipoProducto
    sexo?: StringFilter<"Producto"> | string
    categoria?: XOR<CategoriaScalarRelationFilter, CategoriaWhereInput>
    detalles?: DetalleListRelationFilter
    itemsOrden?: ItemOrdenListRelationFilter
  }

  export type ProductoOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    categoriaId?: SortOrder
    tipoProducto?: SortOrder
    sexo?: SortOrder
    categoria?: CategoriaOrderByWithRelationInput
    detalles?: DetalleOrderByRelationAggregateInput
    itemsOrden?: ItemOrdenOrderByRelationAggregateInput
  }

  export type ProductoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProductoWhereInput | ProductoWhereInput[]
    OR?: ProductoWhereInput[]
    NOT?: ProductoWhereInput | ProductoWhereInput[]
    nombre?: StringFilter<"Producto"> | string
    categoriaId?: IntFilter<"Producto"> | number
    tipoProducto?: EnumTipoProductoFilter<"Producto"> | $Enums.TipoProducto
    sexo?: StringFilter<"Producto"> | string
    categoria?: XOR<CategoriaScalarRelationFilter, CategoriaWhereInput>
    detalles?: DetalleListRelationFilter
    itemsOrden?: ItemOrdenListRelationFilter
  }, "id">

  export type ProductoOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    categoriaId?: SortOrder
    tipoProducto?: SortOrder
    sexo?: SortOrder
    _count?: ProductoCountOrderByAggregateInput
    _avg?: ProductoAvgOrderByAggregateInput
    _max?: ProductoMaxOrderByAggregateInput
    _min?: ProductoMinOrderByAggregateInput
    _sum?: ProductoSumOrderByAggregateInput
  }

  export type ProductoScalarWhereWithAggregatesInput = {
    AND?: ProductoScalarWhereWithAggregatesInput | ProductoScalarWhereWithAggregatesInput[]
    OR?: ProductoScalarWhereWithAggregatesInput[]
    NOT?: ProductoScalarWhereWithAggregatesInput | ProductoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Producto"> | number
    nombre?: StringWithAggregatesFilter<"Producto"> | string
    categoriaId?: IntWithAggregatesFilter<"Producto"> | number
    tipoProducto?: EnumTipoProductoWithAggregatesFilter<"Producto"> | $Enums.TipoProducto
    sexo?: StringWithAggregatesFilter<"Producto"> | string
  }

  export type TalleWhereInput = {
    AND?: TalleWhereInput | TalleWhereInput[]
    OR?: TalleWhereInput[]
    NOT?: TalleWhereInput | TalleWhereInput[]
    id?: IntFilter<"Talle"> | number
    talle?: StringFilter<"Talle"> | string
    detalles?: DetalleListRelationFilter
  }

  export type TalleOrderByWithRelationInput = {
    id?: SortOrder
    talle?: SortOrder
    detalles?: DetalleOrderByRelationAggregateInput
  }

  export type TalleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TalleWhereInput | TalleWhereInput[]
    OR?: TalleWhereInput[]
    NOT?: TalleWhereInput | TalleWhereInput[]
    talle?: StringFilter<"Talle"> | string
    detalles?: DetalleListRelationFilter
  }, "id">

  export type TalleOrderByWithAggregationInput = {
    id?: SortOrder
    talle?: SortOrder
    _count?: TalleCountOrderByAggregateInput
    _avg?: TalleAvgOrderByAggregateInput
    _max?: TalleMaxOrderByAggregateInput
    _min?: TalleMinOrderByAggregateInput
    _sum?: TalleSumOrderByAggregateInput
  }

  export type TalleScalarWhereWithAggregatesInput = {
    AND?: TalleScalarWhereWithAggregatesInput | TalleScalarWhereWithAggregatesInput[]
    OR?: TalleScalarWhereWithAggregatesInput[]
    NOT?: TalleScalarWhereWithAggregatesInput | TalleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Talle"> | number
    talle?: StringWithAggregatesFilter<"Talle"> | string
  }

  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: StringFilter<"Usuario"> | string
    nombre?: StringFilter<"Usuario"> | string
    contraseña?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    dni?: StringFilter<"Usuario"> | string
    rol?: EnumRolFilter<"Usuario"> | $Enums.Rol
    direcciones?: UsuarioDireccionListRelationFilter
    ordenes?: OrdenCompraListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    contraseña?: SortOrder
    email?: SortOrder
    dni?: SortOrder
    rol?: SortOrder
    direcciones?: UsuarioDireccionOrderByRelationAggregateInput
    ordenes?: OrdenCompraOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    dni?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nombre?: StringFilter<"Usuario"> | string
    contraseña?: StringFilter<"Usuario"> | string
    rol?: EnumRolFilter<"Usuario"> | $Enums.Rol
    direcciones?: UsuarioDireccionListRelationFilter
    ordenes?: OrdenCompraListRelationFilter
  }, "id" | "email" | "dni">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    contraseña?: SortOrder
    email?: SortOrder
    dni?: SortOrder
    rol?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Usuario"> | string
    nombre?: StringWithAggregatesFilter<"Usuario"> | string
    contraseña?: StringWithAggregatesFilter<"Usuario"> | string
    email?: StringWithAggregatesFilter<"Usuario"> | string
    dni?: StringWithAggregatesFilter<"Usuario"> | string
    rol?: EnumRolWithAggregatesFilter<"Usuario"> | $Enums.Rol
  }

  export type UsuarioDireccionWhereInput = {
    AND?: UsuarioDireccionWhereInput | UsuarioDireccionWhereInput[]
    OR?: UsuarioDireccionWhereInput[]
    NOT?: UsuarioDireccionWhereInput | UsuarioDireccionWhereInput[]
    id?: IntFilter<"UsuarioDireccion"> | number
    usuarioId?: StringFilter<"UsuarioDireccion"> | string
    direccionId?: IntFilter<"UsuarioDireccion"> | number
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    direccion?: XOR<DireccionScalarRelationFilter, DireccionWhereInput>
    ordenesEnvio?: OrdenCompraListRelationFilter
  }

  export type UsuarioDireccionOrderByWithRelationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    direccionId?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    direccion?: DireccionOrderByWithRelationInput
    ordenesEnvio?: OrdenCompraOrderByRelationAggregateInput
  }

  export type UsuarioDireccionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UsuarioDireccionWhereInput | UsuarioDireccionWhereInput[]
    OR?: UsuarioDireccionWhereInput[]
    NOT?: UsuarioDireccionWhereInput | UsuarioDireccionWhereInput[]
    usuarioId?: StringFilter<"UsuarioDireccion"> | string
    direccionId?: IntFilter<"UsuarioDireccion"> | number
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    direccion?: XOR<DireccionScalarRelationFilter, DireccionWhereInput>
    ordenesEnvio?: OrdenCompraListRelationFilter
  }, "id">

  export type UsuarioDireccionOrderByWithAggregationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    direccionId?: SortOrder
    _count?: UsuarioDireccionCountOrderByAggregateInput
    _avg?: UsuarioDireccionAvgOrderByAggregateInput
    _max?: UsuarioDireccionMaxOrderByAggregateInput
    _min?: UsuarioDireccionMinOrderByAggregateInput
    _sum?: UsuarioDireccionSumOrderByAggregateInput
  }

  export type UsuarioDireccionScalarWhereWithAggregatesInput = {
    AND?: UsuarioDireccionScalarWhereWithAggregatesInput | UsuarioDireccionScalarWhereWithAggregatesInput[]
    OR?: UsuarioDireccionScalarWhereWithAggregatesInput[]
    NOT?: UsuarioDireccionScalarWhereWithAggregatesInput | UsuarioDireccionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UsuarioDireccion"> | number
    usuarioId?: StringWithAggregatesFilter<"UsuarioDireccion"> | string
    direccionId?: IntWithAggregatesFilter<"UsuarioDireccion"> | number
  }

  export type CategoriaCreateInput = {
    nombre: string
    productos?: ProductoCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaUncheckedCreateInput = {
    id?: number
    nombre: string
    productos?: ProductoUncheckedCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    productos?: ProductoUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    productos?: ProductoUncheckedUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriaCreateManyInput = {
    id?: number
    nombre: string
  }

  export type CategoriaUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type CategoriaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type DescuentoCreateInput = {
    porcentaje: number
    fechaInicio: Date | string
    fechaFin: Date | string
    precios?: PrecioCreateNestedManyWithoutDescuentoInput
  }

  export type DescuentoUncheckedCreateInput = {
    id?: number
    porcentaje: number
    fechaInicio: Date | string
    fechaFin: Date | string
    precios?: PrecioUncheckedCreateNestedManyWithoutDescuentoInput
  }

  export type DescuentoUpdateInput = {
    porcentaje?: FloatFieldUpdateOperationsInput | number
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    precios?: PrecioUpdateManyWithoutDescuentoNestedInput
  }

  export type DescuentoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    porcentaje?: FloatFieldUpdateOperationsInput | number
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    precios?: PrecioUncheckedUpdateManyWithoutDescuentoNestedInput
  }

  export type DescuentoCreateManyInput = {
    id?: number
    porcentaje: number
    fechaInicio: Date | string
    fechaFin: Date | string
  }

  export type DescuentoUpdateManyMutationInput = {
    porcentaje?: FloatFieldUpdateOperationsInput | number
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DescuentoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    porcentaje?: FloatFieldUpdateOperationsInput | number
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DetalleCreateInput = {
    color: string
    estado: string
    stock: number
    producto: ProductoCreateNestedOneWithoutDetallesInput
    talle: TalleCreateNestedOneWithoutDetallesInput
    imgs?: ImgCreateNestedManyWithoutDetalleInput
    precios?: PrecioCreateNestedManyWithoutDetalleInput
  }

  export type DetalleUncheckedCreateInput = {
    id?: number
    color: string
    estado: string
    stock: number
    productoId: number
    talleId: number
    imgs?: ImgUncheckedCreateNestedManyWithoutDetalleInput
    precios?: PrecioUncheckedCreateNestedManyWithoutDetalleInput
  }

  export type DetalleUpdateInput = {
    color?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    producto?: ProductoUpdateOneRequiredWithoutDetallesNestedInput
    talle?: TalleUpdateOneRequiredWithoutDetallesNestedInput
    imgs?: ImgUpdateManyWithoutDetalleNestedInput
    precios?: PrecioUpdateManyWithoutDetalleNestedInput
  }

  export type DetalleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    productoId?: IntFieldUpdateOperationsInput | number
    talleId?: IntFieldUpdateOperationsInput | number
    imgs?: ImgUncheckedUpdateManyWithoutDetalleNestedInput
    precios?: PrecioUncheckedUpdateManyWithoutDetalleNestedInput
  }

  export type DetalleCreateManyInput = {
    id?: number
    color: string
    estado: string
    stock: number
    productoId: number
    talleId: number
  }

  export type DetalleUpdateManyMutationInput = {
    color?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
  }

  export type DetalleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    productoId?: IntFieldUpdateOperationsInput | number
    talleId?: IntFieldUpdateOperationsInput | number
  }

  export type DireccionCreateInput = {
    localidad: string
    pais: string
    provincia: string
    departamento: string
    codigoPostal: string
    usuarios?: UsuarioDireccionCreateNestedManyWithoutDireccionInput
  }

  export type DireccionUncheckedCreateInput = {
    id?: number
    localidad: string
    pais: string
    provincia: string
    departamento: string
    codigoPostal: string
    usuarios?: UsuarioDireccionUncheckedCreateNestedManyWithoutDireccionInput
  }

  export type DireccionUpdateInput = {
    localidad?: StringFieldUpdateOperationsInput | string
    pais?: StringFieldUpdateOperationsInput | string
    provincia?: StringFieldUpdateOperationsInput | string
    departamento?: StringFieldUpdateOperationsInput | string
    codigoPostal?: StringFieldUpdateOperationsInput | string
    usuarios?: UsuarioDireccionUpdateManyWithoutDireccionNestedInput
  }

  export type DireccionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    localidad?: StringFieldUpdateOperationsInput | string
    pais?: StringFieldUpdateOperationsInput | string
    provincia?: StringFieldUpdateOperationsInput | string
    departamento?: StringFieldUpdateOperationsInput | string
    codigoPostal?: StringFieldUpdateOperationsInput | string
    usuarios?: UsuarioDireccionUncheckedUpdateManyWithoutDireccionNestedInput
  }

  export type DireccionCreateManyInput = {
    id?: number
    localidad: string
    pais: string
    provincia: string
    departamento: string
    codigoPostal: string
  }

  export type DireccionUpdateManyMutationInput = {
    localidad?: StringFieldUpdateOperationsInput | string
    pais?: StringFieldUpdateOperationsInput | string
    provincia?: StringFieldUpdateOperationsInput | string
    departamento?: StringFieldUpdateOperationsInput | string
    codigoPostal?: StringFieldUpdateOperationsInput | string
  }

  export type DireccionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    localidad?: StringFieldUpdateOperationsInput | string
    pais?: StringFieldUpdateOperationsInput | string
    provincia?: StringFieldUpdateOperationsInput | string
    departamento?: StringFieldUpdateOperationsInput | string
    codigoPostal?: StringFieldUpdateOperationsInput | string
  }

  export type ImgCreateInput = {
    url: string
    detalle: DetalleCreateNestedOneWithoutImgsInput
  }

  export type ImgUncheckedCreateInput = {
    id?: number
    url: string
    detalleId: number
  }

  export type ImgUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    detalle?: DetalleUpdateOneRequiredWithoutImgsNestedInput
  }

  export type ImgUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    detalleId?: IntFieldUpdateOperationsInput | number
  }

  export type ImgCreateManyInput = {
    id?: number
    url: string
    detalleId: number
  }

  export type ImgUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
  }

  export type ImgUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    detalleId?: IntFieldUpdateOperationsInput | number
  }

  export type ItemOrdenCreateInput = {
    cantidad: number
    ordenCompra: OrdenCompraCreateNestedOneWithoutItemsInput
    producto: ProductoCreateNestedOneWithoutItemsOrdenInput
  }

  export type ItemOrdenUncheckedCreateInput = {
    id?: number
    cantidad: number
    ordenCompraId: number
    productoId: number
  }

  export type ItemOrdenUpdateInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    ordenCompra?: OrdenCompraUpdateOneRequiredWithoutItemsNestedInput
    producto?: ProductoUpdateOneRequiredWithoutItemsOrdenNestedInput
  }

  export type ItemOrdenUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    ordenCompraId?: IntFieldUpdateOperationsInput | number
    productoId?: IntFieldUpdateOperationsInput | number
  }

  export type ItemOrdenCreateManyInput = {
    id?: number
    cantidad: number
    ordenCompraId: number
    productoId: number
  }

  export type ItemOrdenUpdateManyMutationInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
  }

  export type ItemOrdenUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    ordenCompraId?: IntFieldUpdateOperationsInput | number
    productoId?: IntFieldUpdateOperationsInput | number
  }

  export type OrdenCompraCreateInput = {
    total: number
    descuento: number
    fechaCompra: string
    usuario: UsuarioCreateNestedOneWithoutOrdenesInput
    direccionEnvio: UsuarioDireccionCreateNestedOneWithoutOrdenesEnvioInput
    items?: ItemOrdenCreateNestedManyWithoutOrdenCompraInput
  }

  export type OrdenCompraUncheckedCreateInput = {
    id?: number
    total: number
    descuento: number
    fechaCompra: string
    usuarioId: string
    direccionEnvioId: number
    items?: ItemOrdenUncheckedCreateNestedManyWithoutOrdenCompraInput
  }

  export type OrdenCompraUpdateInput = {
    total?: FloatFieldUpdateOperationsInput | number
    descuento?: FloatFieldUpdateOperationsInput | number
    fechaCompra?: StringFieldUpdateOperationsInput | string
    usuario?: UsuarioUpdateOneRequiredWithoutOrdenesNestedInput
    direccionEnvio?: UsuarioDireccionUpdateOneRequiredWithoutOrdenesEnvioNestedInput
    items?: ItemOrdenUpdateManyWithoutOrdenCompraNestedInput
  }

  export type OrdenCompraUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    descuento?: FloatFieldUpdateOperationsInput | number
    fechaCompra?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    direccionEnvioId?: IntFieldUpdateOperationsInput | number
    items?: ItemOrdenUncheckedUpdateManyWithoutOrdenCompraNestedInput
  }

  export type OrdenCompraCreateManyInput = {
    id?: number
    total: number
    descuento: number
    fechaCompra: string
    usuarioId: string
    direccionEnvioId: number
  }

  export type OrdenCompraUpdateManyMutationInput = {
    total?: FloatFieldUpdateOperationsInput | number
    descuento?: FloatFieldUpdateOperationsInput | number
    fechaCompra?: StringFieldUpdateOperationsInput | string
  }

  export type OrdenCompraUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    descuento?: FloatFieldUpdateOperationsInput | number
    fechaCompra?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    direccionEnvioId?: IntFieldUpdateOperationsInput | number
  }

  export type PrecioCreateInput = {
    precioCompra: number
    precioVenta: number
    detalle: DetalleCreateNestedOneWithoutPreciosInput
    descuento: DescuentoCreateNestedOneWithoutPreciosInput
  }

  export type PrecioUncheckedCreateInput = {
    id?: number
    precioCompra: number
    precioVenta: number
    detalleId: number
    descuentoId: number
  }

  export type PrecioUpdateInput = {
    precioCompra?: FloatFieldUpdateOperationsInput | number
    precioVenta?: FloatFieldUpdateOperationsInput | number
    detalle?: DetalleUpdateOneRequiredWithoutPreciosNestedInput
    descuento?: DescuentoUpdateOneRequiredWithoutPreciosNestedInput
  }

  export type PrecioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    precioCompra?: FloatFieldUpdateOperationsInput | number
    precioVenta?: FloatFieldUpdateOperationsInput | number
    detalleId?: IntFieldUpdateOperationsInput | number
    descuentoId?: IntFieldUpdateOperationsInput | number
  }

  export type PrecioCreateManyInput = {
    id?: number
    precioCompra: number
    precioVenta: number
    detalleId: number
    descuentoId: number
  }

  export type PrecioUpdateManyMutationInput = {
    precioCompra?: FloatFieldUpdateOperationsInput | number
    precioVenta?: FloatFieldUpdateOperationsInput | number
  }

  export type PrecioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    precioCompra?: FloatFieldUpdateOperationsInput | number
    precioVenta?: FloatFieldUpdateOperationsInput | number
    detalleId?: IntFieldUpdateOperationsInput | number
    descuentoId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductoCreateInput = {
    nombre: string
    tipoProducto: $Enums.TipoProducto
    sexo: string
    categoria: CategoriaCreateNestedOneWithoutProductosInput
    detalles?: DetalleCreateNestedManyWithoutProductoInput
    itemsOrden?: ItemOrdenCreateNestedManyWithoutProductoInput
  }

  export type ProductoUncheckedCreateInput = {
    id?: number
    nombre: string
    categoriaId: number
    tipoProducto: $Enums.TipoProducto
    sexo: string
    detalles?: DetalleUncheckedCreateNestedManyWithoutProductoInput
    itemsOrden?: ItemOrdenUncheckedCreateNestedManyWithoutProductoInput
  }

  export type ProductoUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    tipoProducto?: EnumTipoProductoFieldUpdateOperationsInput | $Enums.TipoProducto
    sexo?: StringFieldUpdateOperationsInput | string
    categoria?: CategoriaUpdateOneRequiredWithoutProductosNestedInput
    detalles?: DetalleUpdateManyWithoutProductoNestedInput
    itemsOrden?: ItemOrdenUpdateManyWithoutProductoNestedInput
  }

  export type ProductoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    categoriaId?: IntFieldUpdateOperationsInput | number
    tipoProducto?: EnumTipoProductoFieldUpdateOperationsInput | $Enums.TipoProducto
    sexo?: StringFieldUpdateOperationsInput | string
    detalles?: DetalleUncheckedUpdateManyWithoutProductoNestedInput
    itemsOrden?: ItemOrdenUncheckedUpdateManyWithoutProductoNestedInput
  }

  export type ProductoCreateManyInput = {
    id?: number
    nombre: string
    categoriaId: number
    tipoProducto: $Enums.TipoProducto
    sexo: string
  }

  export type ProductoUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    tipoProducto?: EnumTipoProductoFieldUpdateOperationsInput | $Enums.TipoProducto
    sexo?: StringFieldUpdateOperationsInput | string
  }

  export type ProductoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    categoriaId?: IntFieldUpdateOperationsInput | number
    tipoProducto?: EnumTipoProductoFieldUpdateOperationsInput | $Enums.TipoProducto
    sexo?: StringFieldUpdateOperationsInput | string
  }

  export type TalleCreateInput = {
    talle: string
    detalles?: DetalleCreateNestedManyWithoutTalleInput
  }

  export type TalleUncheckedCreateInput = {
    id?: number
    talle: string
    detalles?: DetalleUncheckedCreateNestedManyWithoutTalleInput
  }

  export type TalleUpdateInput = {
    talle?: StringFieldUpdateOperationsInput | string
    detalles?: DetalleUpdateManyWithoutTalleNestedInput
  }

  export type TalleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    talle?: StringFieldUpdateOperationsInput | string
    detalles?: DetalleUncheckedUpdateManyWithoutTalleNestedInput
  }

  export type TalleCreateManyInput = {
    id?: number
    talle: string
  }

  export type TalleUpdateManyMutationInput = {
    talle?: StringFieldUpdateOperationsInput | string
  }

  export type TalleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    talle?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioCreateInput = {
    id: string
    nombre: string
    contraseña: string
    email: string
    dni: string
    rol: $Enums.Rol
    direcciones?: UsuarioDireccionCreateNestedManyWithoutUsuarioInput
    ordenes?: OrdenCompraCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id: string
    nombre: string
    contraseña: string
    email: string
    dni: string
    rol: $Enums.Rol
    direcciones?: UsuarioDireccionUncheckedCreateNestedManyWithoutUsuarioInput
    ordenes?: OrdenCompraUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    contraseña?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    direcciones?: UsuarioDireccionUpdateManyWithoutUsuarioNestedInput
    ordenes?: OrdenCompraUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    contraseña?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    direcciones?: UsuarioDireccionUncheckedUpdateManyWithoutUsuarioNestedInput
    ordenes?: OrdenCompraUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    id: string
    nombre: string
    contraseña: string
    email: string
    dni: string
    rol: $Enums.Rol
  }

  export type UsuarioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    contraseña?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    contraseña?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
  }

  export type UsuarioDireccionCreateInput = {
    usuario: UsuarioCreateNestedOneWithoutDireccionesInput
    direccion: DireccionCreateNestedOneWithoutUsuariosInput
    ordenesEnvio?: OrdenCompraCreateNestedManyWithoutDireccionEnvioInput
  }

  export type UsuarioDireccionUncheckedCreateInput = {
    id?: number
    usuarioId: string
    direccionId: number
    ordenesEnvio?: OrdenCompraUncheckedCreateNestedManyWithoutDireccionEnvioInput
  }

  export type UsuarioDireccionUpdateInput = {
    usuario?: UsuarioUpdateOneRequiredWithoutDireccionesNestedInput
    direccion?: DireccionUpdateOneRequiredWithoutUsuariosNestedInput
    ordenesEnvio?: OrdenCompraUpdateManyWithoutDireccionEnvioNestedInput
  }

  export type UsuarioDireccionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: StringFieldUpdateOperationsInput | string
    direccionId?: IntFieldUpdateOperationsInput | number
    ordenesEnvio?: OrdenCompraUncheckedUpdateManyWithoutDireccionEnvioNestedInput
  }

  export type UsuarioDireccionCreateManyInput = {
    id?: number
    usuarioId: string
    direccionId: number
  }

  export type UsuarioDireccionUpdateManyMutationInput = {

  }

  export type UsuarioDireccionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: StringFieldUpdateOperationsInput | string
    direccionId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type ProductoListRelationFilter = {
    every?: ProductoWhereInput
    some?: ProductoWhereInput
    none?: ProductoWhereInput
  }

  export type ProductoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoriaCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type CategoriaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoriaMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type CategoriaMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type CategoriaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PrecioListRelationFilter = {
    every?: PrecioWhereInput
    some?: PrecioWhereInput
    none?: PrecioWhereInput
  }

  export type PrecioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DescuentoCountOrderByAggregateInput = {
    id?: SortOrder
    porcentaje?: SortOrder
    fechaInicio?: SortOrder
    fechaFin?: SortOrder
  }

  export type DescuentoAvgOrderByAggregateInput = {
    id?: SortOrder
    porcentaje?: SortOrder
  }

  export type DescuentoMaxOrderByAggregateInput = {
    id?: SortOrder
    porcentaje?: SortOrder
    fechaInicio?: SortOrder
    fechaFin?: SortOrder
  }

  export type DescuentoMinOrderByAggregateInput = {
    id?: SortOrder
    porcentaje?: SortOrder
    fechaInicio?: SortOrder
    fechaFin?: SortOrder
  }

  export type DescuentoSumOrderByAggregateInput = {
    id?: SortOrder
    porcentaje?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ProductoScalarRelationFilter = {
    is?: ProductoWhereInput
    isNot?: ProductoWhereInput
  }

  export type TalleScalarRelationFilter = {
    is?: TalleWhereInput
    isNot?: TalleWhereInput
  }

  export type ImgListRelationFilter = {
    every?: ImgWhereInput
    some?: ImgWhereInput
    none?: ImgWhereInput
  }

  export type ImgOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DetalleCountOrderByAggregateInput = {
    id?: SortOrder
    color?: SortOrder
    estado?: SortOrder
    stock?: SortOrder
    productoId?: SortOrder
    talleId?: SortOrder
  }

  export type DetalleAvgOrderByAggregateInput = {
    id?: SortOrder
    stock?: SortOrder
    productoId?: SortOrder
    talleId?: SortOrder
  }

  export type DetalleMaxOrderByAggregateInput = {
    id?: SortOrder
    color?: SortOrder
    estado?: SortOrder
    stock?: SortOrder
    productoId?: SortOrder
    talleId?: SortOrder
  }

  export type DetalleMinOrderByAggregateInput = {
    id?: SortOrder
    color?: SortOrder
    estado?: SortOrder
    stock?: SortOrder
    productoId?: SortOrder
    talleId?: SortOrder
  }

  export type DetalleSumOrderByAggregateInput = {
    id?: SortOrder
    stock?: SortOrder
    productoId?: SortOrder
    talleId?: SortOrder
  }

  export type UsuarioDireccionListRelationFilter = {
    every?: UsuarioDireccionWhereInput
    some?: UsuarioDireccionWhereInput
    none?: UsuarioDireccionWhereInput
  }

  export type UsuarioDireccionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DireccionCountOrderByAggregateInput = {
    id?: SortOrder
    localidad?: SortOrder
    pais?: SortOrder
    provincia?: SortOrder
    departamento?: SortOrder
    codigoPostal?: SortOrder
  }

  export type DireccionAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DireccionMaxOrderByAggregateInput = {
    id?: SortOrder
    localidad?: SortOrder
    pais?: SortOrder
    provincia?: SortOrder
    departamento?: SortOrder
    codigoPostal?: SortOrder
  }

  export type DireccionMinOrderByAggregateInput = {
    id?: SortOrder
    localidad?: SortOrder
    pais?: SortOrder
    provincia?: SortOrder
    departamento?: SortOrder
    codigoPostal?: SortOrder
  }

  export type DireccionSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DetalleScalarRelationFilter = {
    is?: DetalleWhereInput
    isNot?: DetalleWhereInput
  }

  export type ImgCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    detalleId?: SortOrder
  }

  export type ImgAvgOrderByAggregateInput = {
    id?: SortOrder
    detalleId?: SortOrder
  }

  export type ImgMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    detalleId?: SortOrder
  }

  export type ImgMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    detalleId?: SortOrder
  }

  export type ImgSumOrderByAggregateInput = {
    id?: SortOrder
    detalleId?: SortOrder
  }

  export type OrdenCompraScalarRelationFilter = {
    is?: OrdenCompraWhereInput
    isNot?: OrdenCompraWhereInput
  }

  export type ItemOrdenCountOrderByAggregateInput = {
    id?: SortOrder
    cantidad?: SortOrder
    ordenCompraId?: SortOrder
    productoId?: SortOrder
  }

  export type ItemOrdenAvgOrderByAggregateInput = {
    id?: SortOrder
    cantidad?: SortOrder
    ordenCompraId?: SortOrder
    productoId?: SortOrder
  }

  export type ItemOrdenMaxOrderByAggregateInput = {
    id?: SortOrder
    cantidad?: SortOrder
    ordenCompraId?: SortOrder
    productoId?: SortOrder
  }

  export type ItemOrdenMinOrderByAggregateInput = {
    id?: SortOrder
    cantidad?: SortOrder
    ordenCompraId?: SortOrder
    productoId?: SortOrder
  }

  export type ItemOrdenSumOrderByAggregateInput = {
    id?: SortOrder
    cantidad?: SortOrder
    ordenCompraId?: SortOrder
    productoId?: SortOrder
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type UsuarioDireccionScalarRelationFilter = {
    is?: UsuarioDireccionWhereInput
    isNot?: UsuarioDireccionWhereInput
  }

  export type ItemOrdenListRelationFilter = {
    every?: ItemOrdenWhereInput
    some?: ItemOrdenWhereInput
    none?: ItemOrdenWhereInput
  }

  export type ItemOrdenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrdenCompraCountOrderByAggregateInput = {
    id?: SortOrder
    total?: SortOrder
    descuento?: SortOrder
    fechaCompra?: SortOrder
    usuarioId?: SortOrder
    direccionEnvioId?: SortOrder
  }

  export type OrdenCompraAvgOrderByAggregateInput = {
    id?: SortOrder
    total?: SortOrder
    descuento?: SortOrder
    direccionEnvioId?: SortOrder
  }

  export type OrdenCompraMaxOrderByAggregateInput = {
    id?: SortOrder
    total?: SortOrder
    descuento?: SortOrder
    fechaCompra?: SortOrder
    usuarioId?: SortOrder
    direccionEnvioId?: SortOrder
  }

  export type OrdenCompraMinOrderByAggregateInput = {
    id?: SortOrder
    total?: SortOrder
    descuento?: SortOrder
    fechaCompra?: SortOrder
    usuarioId?: SortOrder
    direccionEnvioId?: SortOrder
  }

  export type OrdenCompraSumOrderByAggregateInput = {
    id?: SortOrder
    total?: SortOrder
    descuento?: SortOrder
    direccionEnvioId?: SortOrder
  }

  export type DescuentoScalarRelationFilter = {
    is?: DescuentoWhereInput
    isNot?: DescuentoWhereInput
  }

  export type PrecioCountOrderByAggregateInput = {
    id?: SortOrder
    precioCompra?: SortOrder
    precioVenta?: SortOrder
    detalleId?: SortOrder
    descuentoId?: SortOrder
  }

  export type PrecioAvgOrderByAggregateInput = {
    id?: SortOrder
    precioCompra?: SortOrder
    precioVenta?: SortOrder
    detalleId?: SortOrder
    descuentoId?: SortOrder
  }

  export type PrecioMaxOrderByAggregateInput = {
    id?: SortOrder
    precioCompra?: SortOrder
    precioVenta?: SortOrder
    detalleId?: SortOrder
    descuentoId?: SortOrder
  }

  export type PrecioMinOrderByAggregateInput = {
    id?: SortOrder
    precioCompra?: SortOrder
    precioVenta?: SortOrder
    detalleId?: SortOrder
    descuentoId?: SortOrder
  }

  export type PrecioSumOrderByAggregateInput = {
    id?: SortOrder
    precioCompra?: SortOrder
    precioVenta?: SortOrder
    detalleId?: SortOrder
    descuentoId?: SortOrder
  }

  export type EnumTipoProductoFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoProducto | EnumTipoProductoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoProducto[] | ListEnumTipoProductoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoProducto[] | ListEnumTipoProductoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoProductoFilter<$PrismaModel> | $Enums.TipoProducto
  }

  export type CategoriaScalarRelationFilter = {
    is?: CategoriaWhereInput
    isNot?: CategoriaWhereInput
  }

  export type DetalleListRelationFilter = {
    every?: DetalleWhereInput
    some?: DetalleWhereInput
    none?: DetalleWhereInput
  }

  export type DetalleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductoCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    categoriaId?: SortOrder
    tipoProducto?: SortOrder
    sexo?: SortOrder
  }

  export type ProductoAvgOrderByAggregateInput = {
    id?: SortOrder
    categoriaId?: SortOrder
  }

  export type ProductoMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    categoriaId?: SortOrder
    tipoProducto?: SortOrder
    sexo?: SortOrder
  }

  export type ProductoMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    categoriaId?: SortOrder
    tipoProducto?: SortOrder
    sexo?: SortOrder
  }

  export type ProductoSumOrderByAggregateInput = {
    id?: SortOrder
    categoriaId?: SortOrder
  }

  export type EnumTipoProductoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoProducto | EnumTipoProductoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoProducto[] | ListEnumTipoProductoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoProducto[] | ListEnumTipoProductoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoProductoWithAggregatesFilter<$PrismaModel> | $Enums.TipoProducto
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoProductoFilter<$PrismaModel>
    _max?: NestedEnumTipoProductoFilter<$PrismaModel>
  }

  export type TalleCountOrderByAggregateInput = {
    id?: SortOrder
    talle?: SortOrder
  }

  export type TalleAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TalleMaxOrderByAggregateInput = {
    id?: SortOrder
    talle?: SortOrder
  }

  export type TalleMinOrderByAggregateInput = {
    id?: SortOrder
    talle?: SortOrder
  }

  export type TalleSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumRolFilter<$PrismaModel = never> = {
    equals?: $Enums.Rol | EnumRolFieldRefInput<$PrismaModel>
    in?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    notIn?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    not?: NestedEnumRolFilter<$PrismaModel> | $Enums.Rol
  }

  export type OrdenCompraListRelationFilter = {
    every?: OrdenCompraWhereInput
    some?: OrdenCompraWhereInput
    none?: OrdenCompraWhereInput
  }

  export type OrdenCompraOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    contraseña?: SortOrder
    email?: SortOrder
    dni?: SortOrder
    rol?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    contraseña?: SortOrder
    email?: SortOrder
    dni?: SortOrder
    rol?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    contraseña?: SortOrder
    email?: SortOrder
    dni?: SortOrder
    rol?: SortOrder
  }

  export type EnumRolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Rol | EnumRolFieldRefInput<$PrismaModel>
    in?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    notIn?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    not?: NestedEnumRolWithAggregatesFilter<$PrismaModel> | $Enums.Rol
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRolFilter<$PrismaModel>
    _max?: NestedEnumRolFilter<$PrismaModel>
  }

  export type DireccionScalarRelationFilter = {
    is?: DireccionWhereInput
    isNot?: DireccionWhereInput
  }

  export type UsuarioDireccionCountOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    direccionId?: SortOrder
  }

  export type UsuarioDireccionAvgOrderByAggregateInput = {
    id?: SortOrder
    direccionId?: SortOrder
  }

  export type UsuarioDireccionMaxOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    direccionId?: SortOrder
  }

  export type UsuarioDireccionMinOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    direccionId?: SortOrder
  }

  export type UsuarioDireccionSumOrderByAggregateInput = {
    id?: SortOrder
    direccionId?: SortOrder
  }

  export type ProductoCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<ProductoCreateWithoutCategoriaInput, ProductoUncheckedCreateWithoutCategoriaInput> | ProductoCreateWithoutCategoriaInput[] | ProductoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: ProductoCreateOrConnectWithoutCategoriaInput | ProductoCreateOrConnectWithoutCategoriaInput[]
    createMany?: ProductoCreateManyCategoriaInputEnvelope
    connect?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
  }

  export type ProductoUncheckedCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<ProductoCreateWithoutCategoriaInput, ProductoUncheckedCreateWithoutCategoriaInput> | ProductoCreateWithoutCategoriaInput[] | ProductoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: ProductoCreateOrConnectWithoutCategoriaInput | ProductoCreateOrConnectWithoutCategoriaInput[]
    createMany?: ProductoCreateManyCategoriaInputEnvelope
    connect?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type ProductoUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<ProductoCreateWithoutCategoriaInput, ProductoUncheckedCreateWithoutCategoriaInput> | ProductoCreateWithoutCategoriaInput[] | ProductoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: ProductoCreateOrConnectWithoutCategoriaInput | ProductoCreateOrConnectWithoutCategoriaInput[]
    upsert?: ProductoUpsertWithWhereUniqueWithoutCategoriaInput | ProductoUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: ProductoCreateManyCategoriaInputEnvelope
    set?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
    disconnect?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
    delete?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
    connect?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
    update?: ProductoUpdateWithWhereUniqueWithoutCategoriaInput | ProductoUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: ProductoUpdateManyWithWhereWithoutCategoriaInput | ProductoUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: ProductoScalarWhereInput | ProductoScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProductoUncheckedUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<ProductoCreateWithoutCategoriaInput, ProductoUncheckedCreateWithoutCategoriaInput> | ProductoCreateWithoutCategoriaInput[] | ProductoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: ProductoCreateOrConnectWithoutCategoriaInput | ProductoCreateOrConnectWithoutCategoriaInput[]
    upsert?: ProductoUpsertWithWhereUniqueWithoutCategoriaInput | ProductoUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: ProductoCreateManyCategoriaInputEnvelope
    set?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
    disconnect?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
    delete?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
    connect?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
    update?: ProductoUpdateWithWhereUniqueWithoutCategoriaInput | ProductoUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: ProductoUpdateManyWithWhereWithoutCategoriaInput | ProductoUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: ProductoScalarWhereInput | ProductoScalarWhereInput[]
  }

  export type PrecioCreateNestedManyWithoutDescuentoInput = {
    create?: XOR<PrecioCreateWithoutDescuentoInput, PrecioUncheckedCreateWithoutDescuentoInput> | PrecioCreateWithoutDescuentoInput[] | PrecioUncheckedCreateWithoutDescuentoInput[]
    connectOrCreate?: PrecioCreateOrConnectWithoutDescuentoInput | PrecioCreateOrConnectWithoutDescuentoInput[]
    createMany?: PrecioCreateManyDescuentoInputEnvelope
    connect?: PrecioWhereUniqueInput | PrecioWhereUniqueInput[]
  }

  export type PrecioUncheckedCreateNestedManyWithoutDescuentoInput = {
    create?: XOR<PrecioCreateWithoutDescuentoInput, PrecioUncheckedCreateWithoutDescuentoInput> | PrecioCreateWithoutDescuentoInput[] | PrecioUncheckedCreateWithoutDescuentoInput[]
    connectOrCreate?: PrecioCreateOrConnectWithoutDescuentoInput | PrecioCreateOrConnectWithoutDescuentoInput[]
    createMany?: PrecioCreateManyDescuentoInputEnvelope
    connect?: PrecioWhereUniqueInput | PrecioWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PrecioUpdateManyWithoutDescuentoNestedInput = {
    create?: XOR<PrecioCreateWithoutDescuentoInput, PrecioUncheckedCreateWithoutDescuentoInput> | PrecioCreateWithoutDescuentoInput[] | PrecioUncheckedCreateWithoutDescuentoInput[]
    connectOrCreate?: PrecioCreateOrConnectWithoutDescuentoInput | PrecioCreateOrConnectWithoutDescuentoInput[]
    upsert?: PrecioUpsertWithWhereUniqueWithoutDescuentoInput | PrecioUpsertWithWhereUniqueWithoutDescuentoInput[]
    createMany?: PrecioCreateManyDescuentoInputEnvelope
    set?: PrecioWhereUniqueInput | PrecioWhereUniqueInput[]
    disconnect?: PrecioWhereUniqueInput | PrecioWhereUniqueInput[]
    delete?: PrecioWhereUniqueInput | PrecioWhereUniqueInput[]
    connect?: PrecioWhereUniqueInput | PrecioWhereUniqueInput[]
    update?: PrecioUpdateWithWhereUniqueWithoutDescuentoInput | PrecioUpdateWithWhereUniqueWithoutDescuentoInput[]
    updateMany?: PrecioUpdateManyWithWhereWithoutDescuentoInput | PrecioUpdateManyWithWhereWithoutDescuentoInput[]
    deleteMany?: PrecioScalarWhereInput | PrecioScalarWhereInput[]
  }

  export type PrecioUncheckedUpdateManyWithoutDescuentoNestedInput = {
    create?: XOR<PrecioCreateWithoutDescuentoInput, PrecioUncheckedCreateWithoutDescuentoInput> | PrecioCreateWithoutDescuentoInput[] | PrecioUncheckedCreateWithoutDescuentoInput[]
    connectOrCreate?: PrecioCreateOrConnectWithoutDescuentoInput | PrecioCreateOrConnectWithoutDescuentoInput[]
    upsert?: PrecioUpsertWithWhereUniqueWithoutDescuentoInput | PrecioUpsertWithWhereUniqueWithoutDescuentoInput[]
    createMany?: PrecioCreateManyDescuentoInputEnvelope
    set?: PrecioWhereUniqueInput | PrecioWhereUniqueInput[]
    disconnect?: PrecioWhereUniqueInput | PrecioWhereUniqueInput[]
    delete?: PrecioWhereUniqueInput | PrecioWhereUniqueInput[]
    connect?: PrecioWhereUniqueInput | PrecioWhereUniqueInput[]
    update?: PrecioUpdateWithWhereUniqueWithoutDescuentoInput | PrecioUpdateWithWhereUniqueWithoutDescuentoInput[]
    updateMany?: PrecioUpdateManyWithWhereWithoutDescuentoInput | PrecioUpdateManyWithWhereWithoutDescuentoInput[]
    deleteMany?: PrecioScalarWhereInput | PrecioScalarWhereInput[]
  }

  export type ProductoCreateNestedOneWithoutDetallesInput = {
    create?: XOR<ProductoCreateWithoutDetallesInput, ProductoUncheckedCreateWithoutDetallesInput>
    connectOrCreate?: ProductoCreateOrConnectWithoutDetallesInput
    connect?: ProductoWhereUniqueInput
  }

  export type TalleCreateNestedOneWithoutDetallesInput = {
    create?: XOR<TalleCreateWithoutDetallesInput, TalleUncheckedCreateWithoutDetallesInput>
    connectOrCreate?: TalleCreateOrConnectWithoutDetallesInput
    connect?: TalleWhereUniqueInput
  }

  export type ImgCreateNestedManyWithoutDetalleInput = {
    create?: XOR<ImgCreateWithoutDetalleInput, ImgUncheckedCreateWithoutDetalleInput> | ImgCreateWithoutDetalleInput[] | ImgUncheckedCreateWithoutDetalleInput[]
    connectOrCreate?: ImgCreateOrConnectWithoutDetalleInput | ImgCreateOrConnectWithoutDetalleInput[]
    createMany?: ImgCreateManyDetalleInputEnvelope
    connect?: ImgWhereUniqueInput | ImgWhereUniqueInput[]
  }

  export type PrecioCreateNestedManyWithoutDetalleInput = {
    create?: XOR<PrecioCreateWithoutDetalleInput, PrecioUncheckedCreateWithoutDetalleInput> | PrecioCreateWithoutDetalleInput[] | PrecioUncheckedCreateWithoutDetalleInput[]
    connectOrCreate?: PrecioCreateOrConnectWithoutDetalleInput | PrecioCreateOrConnectWithoutDetalleInput[]
    createMany?: PrecioCreateManyDetalleInputEnvelope
    connect?: PrecioWhereUniqueInput | PrecioWhereUniqueInput[]
  }

  export type ImgUncheckedCreateNestedManyWithoutDetalleInput = {
    create?: XOR<ImgCreateWithoutDetalleInput, ImgUncheckedCreateWithoutDetalleInput> | ImgCreateWithoutDetalleInput[] | ImgUncheckedCreateWithoutDetalleInput[]
    connectOrCreate?: ImgCreateOrConnectWithoutDetalleInput | ImgCreateOrConnectWithoutDetalleInput[]
    createMany?: ImgCreateManyDetalleInputEnvelope
    connect?: ImgWhereUniqueInput | ImgWhereUniqueInput[]
  }

  export type PrecioUncheckedCreateNestedManyWithoutDetalleInput = {
    create?: XOR<PrecioCreateWithoutDetalleInput, PrecioUncheckedCreateWithoutDetalleInput> | PrecioCreateWithoutDetalleInput[] | PrecioUncheckedCreateWithoutDetalleInput[]
    connectOrCreate?: PrecioCreateOrConnectWithoutDetalleInput | PrecioCreateOrConnectWithoutDetalleInput[]
    createMany?: PrecioCreateManyDetalleInputEnvelope
    connect?: PrecioWhereUniqueInput | PrecioWhereUniqueInput[]
  }

  export type ProductoUpdateOneRequiredWithoutDetallesNestedInput = {
    create?: XOR<ProductoCreateWithoutDetallesInput, ProductoUncheckedCreateWithoutDetallesInput>
    connectOrCreate?: ProductoCreateOrConnectWithoutDetallesInput
    upsert?: ProductoUpsertWithoutDetallesInput
    connect?: ProductoWhereUniqueInput
    update?: XOR<XOR<ProductoUpdateToOneWithWhereWithoutDetallesInput, ProductoUpdateWithoutDetallesInput>, ProductoUncheckedUpdateWithoutDetallesInput>
  }

  export type TalleUpdateOneRequiredWithoutDetallesNestedInput = {
    create?: XOR<TalleCreateWithoutDetallesInput, TalleUncheckedCreateWithoutDetallesInput>
    connectOrCreate?: TalleCreateOrConnectWithoutDetallesInput
    upsert?: TalleUpsertWithoutDetallesInput
    connect?: TalleWhereUniqueInput
    update?: XOR<XOR<TalleUpdateToOneWithWhereWithoutDetallesInput, TalleUpdateWithoutDetallesInput>, TalleUncheckedUpdateWithoutDetallesInput>
  }

  export type ImgUpdateManyWithoutDetalleNestedInput = {
    create?: XOR<ImgCreateWithoutDetalleInput, ImgUncheckedCreateWithoutDetalleInput> | ImgCreateWithoutDetalleInput[] | ImgUncheckedCreateWithoutDetalleInput[]
    connectOrCreate?: ImgCreateOrConnectWithoutDetalleInput | ImgCreateOrConnectWithoutDetalleInput[]
    upsert?: ImgUpsertWithWhereUniqueWithoutDetalleInput | ImgUpsertWithWhereUniqueWithoutDetalleInput[]
    createMany?: ImgCreateManyDetalleInputEnvelope
    set?: ImgWhereUniqueInput | ImgWhereUniqueInput[]
    disconnect?: ImgWhereUniqueInput | ImgWhereUniqueInput[]
    delete?: ImgWhereUniqueInput | ImgWhereUniqueInput[]
    connect?: ImgWhereUniqueInput | ImgWhereUniqueInput[]
    update?: ImgUpdateWithWhereUniqueWithoutDetalleInput | ImgUpdateWithWhereUniqueWithoutDetalleInput[]
    updateMany?: ImgUpdateManyWithWhereWithoutDetalleInput | ImgUpdateManyWithWhereWithoutDetalleInput[]
    deleteMany?: ImgScalarWhereInput | ImgScalarWhereInput[]
  }

  export type PrecioUpdateManyWithoutDetalleNestedInput = {
    create?: XOR<PrecioCreateWithoutDetalleInput, PrecioUncheckedCreateWithoutDetalleInput> | PrecioCreateWithoutDetalleInput[] | PrecioUncheckedCreateWithoutDetalleInput[]
    connectOrCreate?: PrecioCreateOrConnectWithoutDetalleInput | PrecioCreateOrConnectWithoutDetalleInput[]
    upsert?: PrecioUpsertWithWhereUniqueWithoutDetalleInput | PrecioUpsertWithWhereUniqueWithoutDetalleInput[]
    createMany?: PrecioCreateManyDetalleInputEnvelope
    set?: PrecioWhereUniqueInput | PrecioWhereUniqueInput[]
    disconnect?: PrecioWhereUniqueInput | PrecioWhereUniqueInput[]
    delete?: PrecioWhereUniqueInput | PrecioWhereUniqueInput[]
    connect?: PrecioWhereUniqueInput | PrecioWhereUniqueInput[]
    update?: PrecioUpdateWithWhereUniqueWithoutDetalleInput | PrecioUpdateWithWhereUniqueWithoutDetalleInput[]
    updateMany?: PrecioUpdateManyWithWhereWithoutDetalleInput | PrecioUpdateManyWithWhereWithoutDetalleInput[]
    deleteMany?: PrecioScalarWhereInput | PrecioScalarWhereInput[]
  }

  export type ImgUncheckedUpdateManyWithoutDetalleNestedInput = {
    create?: XOR<ImgCreateWithoutDetalleInput, ImgUncheckedCreateWithoutDetalleInput> | ImgCreateWithoutDetalleInput[] | ImgUncheckedCreateWithoutDetalleInput[]
    connectOrCreate?: ImgCreateOrConnectWithoutDetalleInput | ImgCreateOrConnectWithoutDetalleInput[]
    upsert?: ImgUpsertWithWhereUniqueWithoutDetalleInput | ImgUpsertWithWhereUniqueWithoutDetalleInput[]
    createMany?: ImgCreateManyDetalleInputEnvelope
    set?: ImgWhereUniqueInput | ImgWhereUniqueInput[]
    disconnect?: ImgWhereUniqueInput | ImgWhereUniqueInput[]
    delete?: ImgWhereUniqueInput | ImgWhereUniqueInput[]
    connect?: ImgWhereUniqueInput | ImgWhereUniqueInput[]
    update?: ImgUpdateWithWhereUniqueWithoutDetalleInput | ImgUpdateWithWhereUniqueWithoutDetalleInput[]
    updateMany?: ImgUpdateManyWithWhereWithoutDetalleInput | ImgUpdateManyWithWhereWithoutDetalleInput[]
    deleteMany?: ImgScalarWhereInput | ImgScalarWhereInput[]
  }

  export type PrecioUncheckedUpdateManyWithoutDetalleNestedInput = {
    create?: XOR<PrecioCreateWithoutDetalleInput, PrecioUncheckedCreateWithoutDetalleInput> | PrecioCreateWithoutDetalleInput[] | PrecioUncheckedCreateWithoutDetalleInput[]
    connectOrCreate?: PrecioCreateOrConnectWithoutDetalleInput | PrecioCreateOrConnectWithoutDetalleInput[]
    upsert?: PrecioUpsertWithWhereUniqueWithoutDetalleInput | PrecioUpsertWithWhereUniqueWithoutDetalleInput[]
    createMany?: PrecioCreateManyDetalleInputEnvelope
    set?: PrecioWhereUniqueInput | PrecioWhereUniqueInput[]
    disconnect?: PrecioWhereUniqueInput | PrecioWhereUniqueInput[]
    delete?: PrecioWhereUniqueInput | PrecioWhereUniqueInput[]
    connect?: PrecioWhereUniqueInput | PrecioWhereUniqueInput[]
    update?: PrecioUpdateWithWhereUniqueWithoutDetalleInput | PrecioUpdateWithWhereUniqueWithoutDetalleInput[]
    updateMany?: PrecioUpdateManyWithWhereWithoutDetalleInput | PrecioUpdateManyWithWhereWithoutDetalleInput[]
    deleteMany?: PrecioScalarWhereInput | PrecioScalarWhereInput[]
  }

  export type UsuarioDireccionCreateNestedManyWithoutDireccionInput = {
    create?: XOR<UsuarioDireccionCreateWithoutDireccionInput, UsuarioDireccionUncheckedCreateWithoutDireccionInput> | UsuarioDireccionCreateWithoutDireccionInput[] | UsuarioDireccionUncheckedCreateWithoutDireccionInput[]
    connectOrCreate?: UsuarioDireccionCreateOrConnectWithoutDireccionInput | UsuarioDireccionCreateOrConnectWithoutDireccionInput[]
    createMany?: UsuarioDireccionCreateManyDireccionInputEnvelope
    connect?: UsuarioDireccionWhereUniqueInput | UsuarioDireccionWhereUniqueInput[]
  }

  export type UsuarioDireccionUncheckedCreateNestedManyWithoutDireccionInput = {
    create?: XOR<UsuarioDireccionCreateWithoutDireccionInput, UsuarioDireccionUncheckedCreateWithoutDireccionInput> | UsuarioDireccionCreateWithoutDireccionInput[] | UsuarioDireccionUncheckedCreateWithoutDireccionInput[]
    connectOrCreate?: UsuarioDireccionCreateOrConnectWithoutDireccionInput | UsuarioDireccionCreateOrConnectWithoutDireccionInput[]
    createMany?: UsuarioDireccionCreateManyDireccionInputEnvelope
    connect?: UsuarioDireccionWhereUniqueInput | UsuarioDireccionWhereUniqueInput[]
  }

  export type UsuarioDireccionUpdateManyWithoutDireccionNestedInput = {
    create?: XOR<UsuarioDireccionCreateWithoutDireccionInput, UsuarioDireccionUncheckedCreateWithoutDireccionInput> | UsuarioDireccionCreateWithoutDireccionInput[] | UsuarioDireccionUncheckedCreateWithoutDireccionInput[]
    connectOrCreate?: UsuarioDireccionCreateOrConnectWithoutDireccionInput | UsuarioDireccionCreateOrConnectWithoutDireccionInput[]
    upsert?: UsuarioDireccionUpsertWithWhereUniqueWithoutDireccionInput | UsuarioDireccionUpsertWithWhereUniqueWithoutDireccionInput[]
    createMany?: UsuarioDireccionCreateManyDireccionInputEnvelope
    set?: UsuarioDireccionWhereUniqueInput | UsuarioDireccionWhereUniqueInput[]
    disconnect?: UsuarioDireccionWhereUniqueInput | UsuarioDireccionWhereUniqueInput[]
    delete?: UsuarioDireccionWhereUniqueInput | UsuarioDireccionWhereUniqueInput[]
    connect?: UsuarioDireccionWhereUniqueInput | UsuarioDireccionWhereUniqueInput[]
    update?: UsuarioDireccionUpdateWithWhereUniqueWithoutDireccionInput | UsuarioDireccionUpdateWithWhereUniqueWithoutDireccionInput[]
    updateMany?: UsuarioDireccionUpdateManyWithWhereWithoutDireccionInput | UsuarioDireccionUpdateManyWithWhereWithoutDireccionInput[]
    deleteMany?: UsuarioDireccionScalarWhereInput | UsuarioDireccionScalarWhereInput[]
  }

  export type UsuarioDireccionUncheckedUpdateManyWithoutDireccionNestedInput = {
    create?: XOR<UsuarioDireccionCreateWithoutDireccionInput, UsuarioDireccionUncheckedCreateWithoutDireccionInput> | UsuarioDireccionCreateWithoutDireccionInput[] | UsuarioDireccionUncheckedCreateWithoutDireccionInput[]
    connectOrCreate?: UsuarioDireccionCreateOrConnectWithoutDireccionInput | UsuarioDireccionCreateOrConnectWithoutDireccionInput[]
    upsert?: UsuarioDireccionUpsertWithWhereUniqueWithoutDireccionInput | UsuarioDireccionUpsertWithWhereUniqueWithoutDireccionInput[]
    createMany?: UsuarioDireccionCreateManyDireccionInputEnvelope
    set?: UsuarioDireccionWhereUniqueInput | UsuarioDireccionWhereUniqueInput[]
    disconnect?: UsuarioDireccionWhereUniqueInput | UsuarioDireccionWhereUniqueInput[]
    delete?: UsuarioDireccionWhereUniqueInput | UsuarioDireccionWhereUniqueInput[]
    connect?: UsuarioDireccionWhereUniqueInput | UsuarioDireccionWhereUniqueInput[]
    update?: UsuarioDireccionUpdateWithWhereUniqueWithoutDireccionInput | UsuarioDireccionUpdateWithWhereUniqueWithoutDireccionInput[]
    updateMany?: UsuarioDireccionUpdateManyWithWhereWithoutDireccionInput | UsuarioDireccionUpdateManyWithWhereWithoutDireccionInput[]
    deleteMany?: UsuarioDireccionScalarWhereInput | UsuarioDireccionScalarWhereInput[]
  }

  export type DetalleCreateNestedOneWithoutImgsInput = {
    create?: XOR<DetalleCreateWithoutImgsInput, DetalleUncheckedCreateWithoutImgsInput>
    connectOrCreate?: DetalleCreateOrConnectWithoutImgsInput
    connect?: DetalleWhereUniqueInput
  }

  export type DetalleUpdateOneRequiredWithoutImgsNestedInput = {
    create?: XOR<DetalleCreateWithoutImgsInput, DetalleUncheckedCreateWithoutImgsInput>
    connectOrCreate?: DetalleCreateOrConnectWithoutImgsInput
    upsert?: DetalleUpsertWithoutImgsInput
    connect?: DetalleWhereUniqueInput
    update?: XOR<XOR<DetalleUpdateToOneWithWhereWithoutImgsInput, DetalleUpdateWithoutImgsInput>, DetalleUncheckedUpdateWithoutImgsInput>
  }

  export type OrdenCompraCreateNestedOneWithoutItemsInput = {
    create?: XOR<OrdenCompraCreateWithoutItemsInput, OrdenCompraUncheckedCreateWithoutItemsInput>
    connectOrCreate?: OrdenCompraCreateOrConnectWithoutItemsInput
    connect?: OrdenCompraWhereUniqueInput
  }

  export type ProductoCreateNestedOneWithoutItemsOrdenInput = {
    create?: XOR<ProductoCreateWithoutItemsOrdenInput, ProductoUncheckedCreateWithoutItemsOrdenInput>
    connectOrCreate?: ProductoCreateOrConnectWithoutItemsOrdenInput
    connect?: ProductoWhereUniqueInput
  }

  export type OrdenCompraUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<OrdenCompraCreateWithoutItemsInput, OrdenCompraUncheckedCreateWithoutItemsInput>
    connectOrCreate?: OrdenCompraCreateOrConnectWithoutItemsInput
    upsert?: OrdenCompraUpsertWithoutItemsInput
    connect?: OrdenCompraWhereUniqueInput
    update?: XOR<XOR<OrdenCompraUpdateToOneWithWhereWithoutItemsInput, OrdenCompraUpdateWithoutItemsInput>, OrdenCompraUncheckedUpdateWithoutItemsInput>
  }

  export type ProductoUpdateOneRequiredWithoutItemsOrdenNestedInput = {
    create?: XOR<ProductoCreateWithoutItemsOrdenInput, ProductoUncheckedCreateWithoutItemsOrdenInput>
    connectOrCreate?: ProductoCreateOrConnectWithoutItemsOrdenInput
    upsert?: ProductoUpsertWithoutItemsOrdenInput
    connect?: ProductoWhereUniqueInput
    update?: XOR<XOR<ProductoUpdateToOneWithWhereWithoutItemsOrdenInput, ProductoUpdateWithoutItemsOrdenInput>, ProductoUncheckedUpdateWithoutItemsOrdenInput>
  }

  export type UsuarioCreateNestedOneWithoutOrdenesInput = {
    create?: XOR<UsuarioCreateWithoutOrdenesInput, UsuarioUncheckedCreateWithoutOrdenesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutOrdenesInput
    connect?: UsuarioWhereUniqueInput
  }

  export type UsuarioDireccionCreateNestedOneWithoutOrdenesEnvioInput = {
    create?: XOR<UsuarioDireccionCreateWithoutOrdenesEnvioInput, UsuarioDireccionUncheckedCreateWithoutOrdenesEnvioInput>
    connectOrCreate?: UsuarioDireccionCreateOrConnectWithoutOrdenesEnvioInput
    connect?: UsuarioDireccionWhereUniqueInput
  }

  export type ItemOrdenCreateNestedManyWithoutOrdenCompraInput = {
    create?: XOR<ItemOrdenCreateWithoutOrdenCompraInput, ItemOrdenUncheckedCreateWithoutOrdenCompraInput> | ItemOrdenCreateWithoutOrdenCompraInput[] | ItemOrdenUncheckedCreateWithoutOrdenCompraInput[]
    connectOrCreate?: ItemOrdenCreateOrConnectWithoutOrdenCompraInput | ItemOrdenCreateOrConnectWithoutOrdenCompraInput[]
    createMany?: ItemOrdenCreateManyOrdenCompraInputEnvelope
    connect?: ItemOrdenWhereUniqueInput | ItemOrdenWhereUniqueInput[]
  }

  export type ItemOrdenUncheckedCreateNestedManyWithoutOrdenCompraInput = {
    create?: XOR<ItemOrdenCreateWithoutOrdenCompraInput, ItemOrdenUncheckedCreateWithoutOrdenCompraInput> | ItemOrdenCreateWithoutOrdenCompraInput[] | ItemOrdenUncheckedCreateWithoutOrdenCompraInput[]
    connectOrCreate?: ItemOrdenCreateOrConnectWithoutOrdenCompraInput | ItemOrdenCreateOrConnectWithoutOrdenCompraInput[]
    createMany?: ItemOrdenCreateManyOrdenCompraInputEnvelope
    connect?: ItemOrdenWhereUniqueInput | ItemOrdenWhereUniqueInput[]
  }

  export type UsuarioUpdateOneRequiredWithoutOrdenesNestedInput = {
    create?: XOR<UsuarioCreateWithoutOrdenesInput, UsuarioUncheckedCreateWithoutOrdenesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutOrdenesInput
    upsert?: UsuarioUpsertWithoutOrdenesInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutOrdenesInput, UsuarioUpdateWithoutOrdenesInput>, UsuarioUncheckedUpdateWithoutOrdenesInput>
  }

  export type UsuarioDireccionUpdateOneRequiredWithoutOrdenesEnvioNestedInput = {
    create?: XOR<UsuarioDireccionCreateWithoutOrdenesEnvioInput, UsuarioDireccionUncheckedCreateWithoutOrdenesEnvioInput>
    connectOrCreate?: UsuarioDireccionCreateOrConnectWithoutOrdenesEnvioInput
    upsert?: UsuarioDireccionUpsertWithoutOrdenesEnvioInput
    connect?: UsuarioDireccionWhereUniqueInput
    update?: XOR<XOR<UsuarioDireccionUpdateToOneWithWhereWithoutOrdenesEnvioInput, UsuarioDireccionUpdateWithoutOrdenesEnvioInput>, UsuarioDireccionUncheckedUpdateWithoutOrdenesEnvioInput>
  }

  export type ItemOrdenUpdateManyWithoutOrdenCompraNestedInput = {
    create?: XOR<ItemOrdenCreateWithoutOrdenCompraInput, ItemOrdenUncheckedCreateWithoutOrdenCompraInput> | ItemOrdenCreateWithoutOrdenCompraInput[] | ItemOrdenUncheckedCreateWithoutOrdenCompraInput[]
    connectOrCreate?: ItemOrdenCreateOrConnectWithoutOrdenCompraInput | ItemOrdenCreateOrConnectWithoutOrdenCompraInput[]
    upsert?: ItemOrdenUpsertWithWhereUniqueWithoutOrdenCompraInput | ItemOrdenUpsertWithWhereUniqueWithoutOrdenCompraInput[]
    createMany?: ItemOrdenCreateManyOrdenCompraInputEnvelope
    set?: ItemOrdenWhereUniqueInput | ItemOrdenWhereUniqueInput[]
    disconnect?: ItemOrdenWhereUniqueInput | ItemOrdenWhereUniqueInput[]
    delete?: ItemOrdenWhereUniqueInput | ItemOrdenWhereUniqueInput[]
    connect?: ItemOrdenWhereUniqueInput | ItemOrdenWhereUniqueInput[]
    update?: ItemOrdenUpdateWithWhereUniqueWithoutOrdenCompraInput | ItemOrdenUpdateWithWhereUniqueWithoutOrdenCompraInput[]
    updateMany?: ItemOrdenUpdateManyWithWhereWithoutOrdenCompraInput | ItemOrdenUpdateManyWithWhereWithoutOrdenCompraInput[]
    deleteMany?: ItemOrdenScalarWhereInput | ItemOrdenScalarWhereInput[]
  }

  export type ItemOrdenUncheckedUpdateManyWithoutOrdenCompraNestedInput = {
    create?: XOR<ItemOrdenCreateWithoutOrdenCompraInput, ItemOrdenUncheckedCreateWithoutOrdenCompraInput> | ItemOrdenCreateWithoutOrdenCompraInput[] | ItemOrdenUncheckedCreateWithoutOrdenCompraInput[]
    connectOrCreate?: ItemOrdenCreateOrConnectWithoutOrdenCompraInput | ItemOrdenCreateOrConnectWithoutOrdenCompraInput[]
    upsert?: ItemOrdenUpsertWithWhereUniqueWithoutOrdenCompraInput | ItemOrdenUpsertWithWhereUniqueWithoutOrdenCompraInput[]
    createMany?: ItemOrdenCreateManyOrdenCompraInputEnvelope
    set?: ItemOrdenWhereUniqueInput | ItemOrdenWhereUniqueInput[]
    disconnect?: ItemOrdenWhereUniqueInput | ItemOrdenWhereUniqueInput[]
    delete?: ItemOrdenWhereUniqueInput | ItemOrdenWhereUniqueInput[]
    connect?: ItemOrdenWhereUniqueInput | ItemOrdenWhereUniqueInput[]
    update?: ItemOrdenUpdateWithWhereUniqueWithoutOrdenCompraInput | ItemOrdenUpdateWithWhereUniqueWithoutOrdenCompraInput[]
    updateMany?: ItemOrdenUpdateManyWithWhereWithoutOrdenCompraInput | ItemOrdenUpdateManyWithWhereWithoutOrdenCompraInput[]
    deleteMany?: ItemOrdenScalarWhereInput | ItemOrdenScalarWhereInput[]
  }

  export type DetalleCreateNestedOneWithoutPreciosInput = {
    create?: XOR<DetalleCreateWithoutPreciosInput, DetalleUncheckedCreateWithoutPreciosInput>
    connectOrCreate?: DetalleCreateOrConnectWithoutPreciosInput
    connect?: DetalleWhereUniqueInput
  }

  export type DescuentoCreateNestedOneWithoutPreciosInput = {
    create?: XOR<DescuentoCreateWithoutPreciosInput, DescuentoUncheckedCreateWithoutPreciosInput>
    connectOrCreate?: DescuentoCreateOrConnectWithoutPreciosInput
    connect?: DescuentoWhereUniqueInput
  }

  export type DetalleUpdateOneRequiredWithoutPreciosNestedInput = {
    create?: XOR<DetalleCreateWithoutPreciosInput, DetalleUncheckedCreateWithoutPreciosInput>
    connectOrCreate?: DetalleCreateOrConnectWithoutPreciosInput
    upsert?: DetalleUpsertWithoutPreciosInput
    connect?: DetalleWhereUniqueInput
    update?: XOR<XOR<DetalleUpdateToOneWithWhereWithoutPreciosInput, DetalleUpdateWithoutPreciosInput>, DetalleUncheckedUpdateWithoutPreciosInput>
  }

  export type DescuentoUpdateOneRequiredWithoutPreciosNestedInput = {
    create?: XOR<DescuentoCreateWithoutPreciosInput, DescuentoUncheckedCreateWithoutPreciosInput>
    connectOrCreate?: DescuentoCreateOrConnectWithoutPreciosInput
    upsert?: DescuentoUpsertWithoutPreciosInput
    connect?: DescuentoWhereUniqueInput
    update?: XOR<XOR<DescuentoUpdateToOneWithWhereWithoutPreciosInput, DescuentoUpdateWithoutPreciosInput>, DescuentoUncheckedUpdateWithoutPreciosInput>
  }

  export type CategoriaCreateNestedOneWithoutProductosInput = {
    create?: XOR<CategoriaCreateWithoutProductosInput, CategoriaUncheckedCreateWithoutProductosInput>
    connectOrCreate?: CategoriaCreateOrConnectWithoutProductosInput
    connect?: CategoriaWhereUniqueInput
  }

  export type DetalleCreateNestedManyWithoutProductoInput = {
    create?: XOR<DetalleCreateWithoutProductoInput, DetalleUncheckedCreateWithoutProductoInput> | DetalleCreateWithoutProductoInput[] | DetalleUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: DetalleCreateOrConnectWithoutProductoInput | DetalleCreateOrConnectWithoutProductoInput[]
    createMany?: DetalleCreateManyProductoInputEnvelope
    connect?: DetalleWhereUniqueInput | DetalleWhereUniqueInput[]
  }

  export type ItemOrdenCreateNestedManyWithoutProductoInput = {
    create?: XOR<ItemOrdenCreateWithoutProductoInput, ItemOrdenUncheckedCreateWithoutProductoInput> | ItemOrdenCreateWithoutProductoInput[] | ItemOrdenUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: ItemOrdenCreateOrConnectWithoutProductoInput | ItemOrdenCreateOrConnectWithoutProductoInput[]
    createMany?: ItemOrdenCreateManyProductoInputEnvelope
    connect?: ItemOrdenWhereUniqueInput | ItemOrdenWhereUniqueInput[]
  }

  export type DetalleUncheckedCreateNestedManyWithoutProductoInput = {
    create?: XOR<DetalleCreateWithoutProductoInput, DetalleUncheckedCreateWithoutProductoInput> | DetalleCreateWithoutProductoInput[] | DetalleUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: DetalleCreateOrConnectWithoutProductoInput | DetalleCreateOrConnectWithoutProductoInput[]
    createMany?: DetalleCreateManyProductoInputEnvelope
    connect?: DetalleWhereUniqueInput | DetalleWhereUniqueInput[]
  }

  export type ItemOrdenUncheckedCreateNestedManyWithoutProductoInput = {
    create?: XOR<ItemOrdenCreateWithoutProductoInput, ItemOrdenUncheckedCreateWithoutProductoInput> | ItemOrdenCreateWithoutProductoInput[] | ItemOrdenUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: ItemOrdenCreateOrConnectWithoutProductoInput | ItemOrdenCreateOrConnectWithoutProductoInput[]
    createMany?: ItemOrdenCreateManyProductoInputEnvelope
    connect?: ItemOrdenWhereUniqueInput | ItemOrdenWhereUniqueInput[]
  }

  export type EnumTipoProductoFieldUpdateOperationsInput = {
    set?: $Enums.TipoProducto
  }

  export type CategoriaUpdateOneRequiredWithoutProductosNestedInput = {
    create?: XOR<CategoriaCreateWithoutProductosInput, CategoriaUncheckedCreateWithoutProductosInput>
    connectOrCreate?: CategoriaCreateOrConnectWithoutProductosInput
    upsert?: CategoriaUpsertWithoutProductosInput
    connect?: CategoriaWhereUniqueInput
    update?: XOR<XOR<CategoriaUpdateToOneWithWhereWithoutProductosInput, CategoriaUpdateWithoutProductosInput>, CategoriaUncheckedUpdateWithoutProductosInput>
  }

  export type DetalleUpdateManyWithoutProductoNestedInput = {
    create?: XOR<DetalleCreateWithoutProductoInput, DetalleUncheckedCreateWithoutProductoInput> | DetalleCreateWithoutProductoInput[] | DetalleUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: DetalleCreateOrConnectWithoutProductoInput | DetalleCreateOrConnectWithoutProductoInput[]
    upsert?: DetalleUpsertWithWhereUniqueWithoutProductoInput | DetalleUpsertWithWhereUniqueWithoutProductoInput[]
    createMany?: DetalleCreateManyProductoInputEnvelope
    set?: DetalleWhereUniqueInput | DetalleWhereUniqueInput[]
    disconnect?: DetalleWhereUniqueInput | DetalleWhereUniqueInput[]
    delete?: DetalleWhereUniqueInput | DetalleWhereUniqueInput[]
    connect?: DetalleWhereUniqueInput | DetalleWhereUniqueInput[]
    update?: DetalleUpdateWithWhereUniqueWithoutProductoInput | DetalleUpdateWithWhereUniqueWithoutProductoInput[]
    updateMany?: DetalleUpdateManyWithWhereWithoutProductoInput | DetalleUpdateManyWithWhereWithoutProductoInput[]
    deleteMany?: DetalleScalarWhereInput | DetalleScalarWhereInput[]
  }

  export type ItemOrdenUpdateManyWithoutProductoNestedInput = {
    create?: XOR<ItemOrdenCreateWithoutProductoInput, ItemOrdenUncheckedCreateWithoutProductoInput> | ItemOrdenCreateWithoutProductoInput[] | ItemOrdenUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: ItemOrdenCreateOrConnectWithoutProductoInput | ItemOrdenCreateOrConnectWithoutProductoInput[]
    upsert?: ItemOrdenUpsertWithWhereUniqueWithoutProductoInput | ItemOrdenUpsertWithWhereUniqueWithoutProductoInput[]
    createMany?: ItemOrdenCreateManyProductoInputEnvelope
    set?: ItemOrdenWhereUniqueInput | ItemOrdenWhereUniqueInput[]
    disconnect?: ItemOrdenWhereUniqueInput | ItemOrdenWhereUniqueInput[]
    delete?: ItemOrdenWhereUniqueInput | ItemOrdenWhereUniqueInput[]
    connect?: ItemOrdenWhereUniqueInput | ItemOrdenWhereUniqueInput[]
    update?: ItemOrdenUpdateWithWhereUniqueWithoutProductoInput | ItemOrdenUpdateWithWhereUniqueWithoutProductoInput[]
    updateMany?: ItemOrdenUpdateManyWithWhereWithoutProductoInput | ItemOrdenUpdateManyWithWhereWithoutProductoInput[]
    deleteMany?: ItemOrdenScalarWhereInput | ItemOrdenScalarWhereInput[]
  }

  export type DetalleUncheckedUpdateManyWithoutProductoNestedInput = {
    create?: XOR<DetalleCreateWithoutProductoInput, DetalleUncheckedCreateWithoutProductoInput> | DetalleCreateWithoutProductoInput[] | DetalleUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: DetalleCreateOrConnectWithoutProductoInput | DetalleCreateOrConnectWithoutProductoInput[]
    upsert?: DetalleUpsertWithWhereUniqueWithoutProductoInput | DetalleUpsertWithWhereUniqueWithoutProductoInput[]
    createMany?: DetalleCreateManyProductoInputEnvelope
    set?: DetalleWhereUniqueInput | DetalleWhereUniqueInput[]
    disconnect?: DetalleWhereUniqueInput | DetalleWhereUniqueInput[]
    delete?: DetalleWhereUniqueInput | DetalleWhereUniqueInput[]
    connect?: DetalleWhereUniqueInput | DetalleWhereUniqueInput[]
    update?: DetalleUpdateWithWhereUniqueWithoutProductoInput | DetalleUpdateWithWhereUniqueWithoutProductoInput[]
    updateMany?: DetalleUpdateManyWithWhereWithoutProductoInput | DetalleUpdateManyWithWhereWithoutProductoInput[]
    deleteMany?: DetalleScalarWhereInput | DetalleScalarWhereInput[]
  }

  export type ItemOrdenUncheckedUpdateManyWithoutProductoNestedInput = {
    create?: XOR<ItemOrdenCreateWithoutProductoInput, ItemOrdenUncheckedCreateWithoutProductoInput> | ItemOrdenCreateWithoutProductoInput[] | ItemOrdenUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: ItemOrdenCreateOrConnectWithoutProductoInput | ItemOrdenCreateOrConnectWithoutProductoInput[]
    upsert?: ItemOrdenUpsertWithWhereUniqueWithoutProductoInput | ItemOrdenUpsertWithWhereUniqueWithoutProductoInput[]
    createMany?: ItemOrdenCreateManyProductoInputEnvelope
    set?: ItemOrdenWhereUniqueInput | ItemOrdenWhereUniqueInput[]
    disconnect?: ItemOrdenWhereUniqueInput | ItemOrdenWhereUniqueInput[]
    delete?: ItemOrdenWhereUniqueInput | ItemOrdenWhereUniqueInput[]
    connect?: ItemOrdenWhereUniqueInput | ItemOrdenWhereUniqueInput[]
    update?: ItemOrdenUpdateWithWhereUniqueWithoutProductoInput | ItemOrdenUpdateWithWhereUniqueWithoutProductoInput[]
    updateMany?: ItemOrdenUpdateManyWithWhereWithoutProductoInput | ItemOrdenUpdateManyWithWhereWithoutProductoInput[]
    deleteMany?: ItemOrdenScalarWhereInput | ItemOrdenScalarWhereInput[]
  }

  export type DetalleCreateNestedManyWithoutTalleInput = {
    create?: XOR<DetalleCreateWithoutTalleInput, DetalleUncheckedCreateWithoutTalleInput> | DetalleCreateWithoutTalleInput[] | DetalleUncheckedCreateWithoutTalleInput[]
    connectOrCreate?: DetalleCreateOrConnectWithoutTalleInput | DetalleCreateOrConnectWithoutTalleInput[]
    createMany?: DetalleCreateManyTalleInputEnvelope
    connect?: DetalleWhereUniqueInput | DetalleWhereUniqueInput[]
  }

  export type DetalleUncheckedCreateNestedManyWithoutTalleInput = {
    create?: XOR<DetalleCreateWithoutTalleInput, DetalleUncheckedCreateWithoutTalleInput> | DetalleCreateWithoutTalleInput[] | DetalleUncheckedCreateWithoutTalleInput[]
    connectOrCreate?: DetalleCreateOrConnectWithoutTalleInput | DetalleCreateOrConnectWithoutTalleInput[]
    createMany?: DetalleCreateManyTalleInputEnvelope
    connect?: DetalleWhereUniqueInput | DetalleWhereUniqueInput[]
  }

  export type DetalleUpdateManyWithoutTalleNestedInput = {
    create?: XOR<DetalleCreateWithoutTalleInput, DetalleUncheckedCreateWithoutTalleInput> | DetalleCreateWithoutTalleInput[] | DetalleUncheckedCreateWithoutTalleInput[]
    connectOrCreate?: DetalleCreateOrConnectWithoutTalleInput | DetalleCreateOrConnectWithoutTalleInput[]
    upsert?: DetalleUpsertWithWhereUniqueWithoutTalleInput | DetalleUpsertWithWhereUniqueWithoutTalleInput[]
    createMany?: DetalleCreateManyTalleInputEnvelope
    set?: DetalleWhereUniqueInput | DetalleWhereUniqueInput[]
    disconnect?: DetalleWhereUniqueInput | DetalleWhereUniqueInput[]
    delete?: DetalleWhereUniqueInput | DetalleWhereUniqueInput[]
    connect?: DetalleWhereUniqueInput | DetalleWhereUniqueInput[]
    update?: DetalleUpdateWithWhereUniqueWithoutTalleInput | DetalleUpdateWithWhereUniqueWithoutTalleInput[]
    updateMany?: DetalleUpdateManyWithWhereWithoutTalleInput | DetalleUpdateManyWithWhereWithoutTalleInput[]
    deleteMany?: DetalleScalarWhereInput | DetalleScalarWhereInput[]
  }

  export type DetalleUncheckedUpdateManyWithoutTalleNestedInput = {
    create?: XOR<DetalleCreateWithoutTalleInput, DetalleUncheckedCreateWithoutTalleInput> | DetalleCreateWithoutTalleInput[] | DetalleUncheckedCreateWithoutTalleInput[]
    connectOrCreate?: DetalleCreateOrConnectWithoutTalleInput | DetalleCreateOrConnectWithoutTalleInput[]
    upsert?: DetalleUpsertWithWhereUniqueWithoutTalleInput | DetalleUpsertWithWhereUniqueWithoutTalleInput[]
    createMany?: DetalleCreateManyTalleInputEnvelope
    set?: DetalleWhereUniqueInput | DetalleWhereUniqueInput[]
    disconnect?: DetalleWhereUniqueInput | DetalleWhereUniqueInput[]
    delete?: DetalleWhereUniqueInput | DetalleWhereUniqueInput[]
    connect?: DetalleWhereUniqueInput | DetalleWhereUniqueInput[]
    update?: DetalleUpdateWithWhereUniqueWithoutTalleInput | DetalleUpdateWithWhereUniqueWithoutTalleInput[]
    updateMany?: DetalleUpdateManyWithWhereWithoutTalleInput | DetalleUpdateManyWithWhereWithoutTalleInput[]
    deleteMany?: DetalleScalarWhereInput | DetalleScalarWhereInput[]
  }

  export type UsuarioDireccionCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<UsuarioDireccionCreateWithoutUsuarioInput, UsuarioDireccionUncheckedCreateWithoutUsuarioInput> | UsuarioDireccionCreateWithoutUsuarioInput[] | UsuarioDireccionUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: UsuarioDireccionCreateOrConnectWithoutUsuarioInput | UsuarioDireccionCreateOrConnectWithoutUsuarioInput[]
    createMany?: UsuarioDireccionCreateManyUsuarioInputEnvelope
    connect?: UsuarioDireccionWhereUniqueInput | UsuarioDireccionWhereUniqueInput[]
  }

  export type OrdenCompraCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<OrdenCompraCreateWithoutUsuarioInput, OrdenCompraUncheckedCreateWithoutUsuarioInput> | OrdenCompraCreateWithoutUsuarioInput[] | OrdenCompraUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: OrdenCompraCreateOrConnectWithoutUsuarioInput | OrdenCompraCreateOrConnectWithoutUsuarioInput[]
    createMany?: OrdenCompraCreateManyUsuarioInputEnvelope
    connect?: OrdenCompraWhereUniqueInput | OrdenCompraWhereUniqueInput[]
  }

  export type UsuarioDireccionUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<UsuarioDireccionCreateWithoutUsuarioInput, UsuarioDireccionUncheckedCreateWithoutUsuarioInput> | UsuarioDireccionCreateWithoutUsuarioInput[] | UsuarioDireccionUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: UsuarioDireccionCreateOrConnectWithoutUsuarioInput | UsuarioDireccionCreateOrConnectWithoutUsuarioInput[]
    createMany?: UsuarioDireccionCreateManyUsuarioInputEnvelope
    connect?: UsuarioDireccionWhereUniqueInput | UsuarioDireccionWhereUniqueInput[]
  }

  export type OrdenCompraUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<OrdenCompraCreateWithoutUsuarioInput, OrdenCompraUncheckedCreateWithoutUsuarioInput> | OrdenCompraCreateWithoutUsuarioInput[] | OrdenCompraUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: OrdenCompraCreateOrConnectWithoutUsuarioInput | OrdenCompraCreateOrConnectWithoutUsuarioInput[]
    createMany?: OrdenCompraCreateManyUsuarioInputEnvelope
    connect?: OrdenCompraWhereUniqueInput | OrdenCompraWhereUniqueInput[]
  }

  export type EnumRolFieldUpdateOperationsInput = {
    set?: $Enums.Rol
  }

  export type UsuarioDireccionUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<UsuarioDireccionCreateWithoutUsuarioInput, UsuarioDireccionUncheckedCreateWithoutUsuarioInput> | UsuarioDireccionCreateWithoutUsuarioInput[] | UsuarioDireccionUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: UsuarioDireccionCreateOrConnectWithoutUsuarioInput | UsuarioDireccionCreateOrConnectWithoutUsuarioInput[]
    upsert?: UsuarioDireccionUpsertWithWhereUniqueWithoutUsuarioInput | UsuarioDireccionUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: UsuarioDireccionCreateManyUsuarioInputEnvelope
    set?: UsuarioDireccionWhereUniqueInput | UsuarioDireccionWhereUniqueInput[]
    disconnect?: UsuarioDireccionWhereUniqueInput | UsuarioDireccionWhereUniqueInput[]
    delete?: UsuarioDireccionWhereUniqueInput | UsuarioDireccionWhereUniqueInput[]
    connect?: UsuarioDireccionWhereUniqueInput | UsuarioDireccionWhereUniqueInput[]
    update?: UsuarioDireccionUpdateWithWhereUniqueWithoutUsuarioInput | UsuarioDireccionUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: UsuarioDireccionUpdateManyWithWhereWithoutUsuarioInput | UsuarioDireccionUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: UsuarioDireccionScalarWhereInput | UsuarioDireccionScalarWhereInput[]
  }

  export type OrdenCompraUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<OrdenCompraCreateWithoutUsuarioInput, OrdenCompraUncheckedCreateWithoutUsuarioInput> | OrdenCompraCreateWithoutUsuarioInput[] | OrdenCompraUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: OrdenCompraCreateOrConnectWithoutUsuarioInput | OrdenCompraCreateOrConnectWithoutUsuarioInput[]
    upsert?: OrdenCompraUpsertWithWhereUniqueWithoutUsuarioInput | OrdenCompraUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: OrdenCompraCreateManyUsuarioInputEnvelope
    set?: OrdenCompraWhereUniqueInput | OrdenCompraWhereUniqueInput[]
    disconnect?: OrdenCompraWhereUniqueInput | OrdenCompraWhereUniqueInput[]
    delete?: OrdenCompraWhereUniqueInput | OrdenCompraWhereUniqueInput[]
    connect?: OrdenCompraWhereUniqueInput | OrdenCompraWhereUniqueInput[]
    update?: OrdenCompraUpdateWithWhereUniqueWithoutUsuarioInput | OrdenCompraUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: OrdenCompraUpdateManyWithWhereWithoutUsuarioInput | OrdenCompraUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: OrdenCompraScalarWhereInput | OrdenCompraScalarWhereInput[]
  }

  export type UsuarioDireccionUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<UsuarioDireccionCreateWithoutUsuarioInput, UsuarioDireccionUncheckedCreateWithoutUsuarioInput> | UsuarioDireccionCreateWithoutUsuarioInput[] | UsuarioDireccionUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: UsuarioDireccionCreateOrConnectWithoutUsuarioInput | UsuarioDireccionCreateOrConnectWithoutUsuarioInput[]
    upsert?: UsuarioDireccionUpsertWithWhereUniqueWithoutUsuarioInput | UsuarioDireccionUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: UsuarioDireccionCreateManyUsuarioInputEnvelope
    set?: UsuarioDireccionWhereUniqueInput | UsuarioDireccionWhereUniqueInput[]
    disconnect?: UsuarioDireccionWhereUniqueInput | UsuarioDireccionWhereUniqueInput[]
    delete?: UsuarioDireccionWhereUniqueInput | UsuarioDireccionWhereUniqueInput[]
    connect?: UsuarioDireccionWhereUniqueInput | UsuarioDireccionWhereUniqueInput[]
    update?: UsuarioDireccionUpdateWithWhereUniqueWithoutUsuarioInput | UsuarioDireccionUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: UsuarioDireccionUpdateManyWithWhereWithoutUsuarioInput | UsuarioDireccionUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: UsuarioDireccionScalarWhereInput | UsuarioDireccionScalarWhereInput[]
  }

  export type OrdenCompraUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<OrdenCompraCreateWithoutUsuarioInput, OrdenCompraUncheckedCreateWithoutUsuarioInput> | OrdenCompraCreateWithoutUsuarioInput[] | OrdenCompraUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: OrdenCompraCreateOrConnectWithoutUsuarioInput | OrdenCompraCreateOrConnectWithoutUsuarioInput[]
    upsert?: OrdenCompraUpsertWithWhereUniqueWithoutUsuarioInput | OrdenCompraUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: OrdenCompraCreateManyUsuarioInputEnvelope
    set?: OrdenCompraWhereUniqueInput | OrdenCompraWhereUniqueInput[]
    disconnect?: OrdenCompraWhereUniqueInput | OrdenCompraWhereUniqueInput[]
    delete?: OrdenCompraWhereUniqueInput | OrdenCompraWhereUniqueInput[]
    connect?: OrdenCompraWhereUniqueInput | OrdenCompraWhereUniqueInput[]
    update?: OrdenCompraUpdateWithWhereUniqueWithoutUsuarioInput | OrdenCompraUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: OrdenCompraUpdateManyWithWhereWithoutUsuarioInput | OrdenCompraUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: OrdenCompraScalarWhereInput | OrdenCompraScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutDireccionesInput = {
    create?: XOR<UsuarioCreateWithoutDireccionesInput, UsuarioUncheckedCreateWithoutDireccionesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutDireccionesInput
    connect?: UsuarioWhereUniqueInput
  }

  export type DireccionCreateNestedOneWithoutUsuariosInput = {
    create?: XOR<DireccionCreateWithoutUsuariosInput, DireccionUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: DireccionCreateOrConnectWithoutUsuariosInput
    connect?: DireccionWhereUniqueInput
  }

  export type OrdenCompraCreateNestedManyWithoutDireccionEnvioInput = {
    create?: XOR<OrdenCompraCreateWithoutDireccionEnvioInput, OrdenCompraUncheckedCreateWithoutDireccionEnvioInput> | OrdenCompraCreateWithoutDireccionEnvioInput[] | OrdenCompraUncheckedCreateWithoutDireccionEnvioInput[]
    connectOrCreate?: OrdenCompraCreateOrConnectWithoutDireccionEnvioInput | OrdenCompraCreateOrConnectWithoutDireccionEnvioInput[]
    createMany?: OrdenCompraCreateManyDireccionEnvioInputEnvelope
    connect?: OrdenCompraWhereUniqueInput | OrdenCompraWhereUniqueInput[]
  }

  export type OrdenCompraUncheckedCreateNestedManyWithoutDireccionEnvioInput = {
    create?: XOR<OrdenCompraCreateWithoutDireccionEnvioInput, OrdenCompraUncheckedCreateWithoutDireccionEnvioInput> | OrdenCompraCreateWithoutDireccionEnvioInput[] | OrdenCompraUncheckedCreateWithoutDireccionEnvioInput[]
    connectOrCreate?: OrdenCompraCreateOrConnectWithoutDireccionEnvioInput | OrdenCompraCreateOrConnectWithoutDireccionEnvioInput[]
    createMany?: OrdenCompraCreateManyDireccionEnvioInputEnvelope
    connect?: OrdenCompraWhereUniqueInput | OrdenCompraWhereUniqueInput[]
  }

  export type UsuarioUpdateOneRequiredWithoutDireccionesNestedInput = {
    create?: XOR<UsuarioCreateWithoutDireccionesInput, UsuarioUncheckedCreateWithoutDireccionesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutDireccionesInput
    upsert?: UsuarioUpsertWithoutDireccionesInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutDireccionesInput, UsuarioUpdateWithoutDireccionesInput>, UsuarioUncheckedUpdateWithoutDireccionesInput>
  }

  export type DireccionUpdateOneRequiredWithoutUsuariosNestedInput = {
    create?: XOR<DireccionCreateWithoutUsuariosInput, DireccionUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: DireccionCreateOrConnectWithoutUsuariosInput
    upsert?: DireccionUpsertWithoutUsuariosInput
    connect?: DireccionWhereUniqueInput
    update?: XOR<XOR<DireccionUpdateToOneWithWhereWithoutUsuariosInput, DireccionUpdateWithoutUsuariosInput>, DireccionUncheckedUpdateWithoutUsuariosInput>
  }

  export type OrdenCompraUpdateManyWithoutDireccionEnvioNestedInput = {
    create?: XOR<OrdenCompraCreateWithoutDireccionEnvioInput, OrdenCompraUncheckedCreateWithoutDireccionEnvioInput> | OrdenCompraCreateWithoutDireccionEnvioInput[] | OrdenCompraUncheckedCreateWithoutDireccionEnvioInput[]
    connectOrCreate?: OrdenCompraCreateOrConnectWithoutDireccionEnvioInput | OrdenCompraCreateOrConnectWithoutDireccionEnvioInput[]
    upsert?: OrdenCompraUpsertWithWhereUniqueWithoutDireccionEnvioInput | OrdenCompraUpsertWithWhereUniqueWithoutDireccionEnvioInput[]
    createMany?: OrdenCompraCreateManyDireccionEnvioInputEnvelope
    set?: OrdenCompraWhereUniqueInput | OrdenCompraWhereUniqueInput[]
    disconnect?: OrdenCompraWhereUniqueInput | OrdenCompraWhereUniqueInput[]
    delete?: OrdenCompraWhereUniqueInput | OrdenCompraWhereUniqueInput[]
    connect?: OrdenCompraWhereUniqueInput | OrdenCompraWhereUniqueInput[]
    update?: OrdenCompraUpdateWithWhereUniqueWithoutDireccionEnvioInput | OrdenCompraUpdateWithWhereUniqueWithoutDireccionEnvioInput[]
    updateMany?: OrdenCompraUpdateManyWithWhereWithoutDireccionEnvioInput | OrdenCompraUpdateManyWithWhereWithoutDireccionEnvioInput[]
    deleteMany?: OrdenCompraScalarWhereInput | OrdenCompraScalarWhereInput[]
  }

  export type OrdenCompraUncheckedUpdateManyWithoutDireccionEnvioNestedInput = {
    create?: XOR<OrdenCompraCreateWithoutDireccionEnvioInput, OrdenCompraUncheckedCreateWithoutDireccionEnvioInput> | OrdenCompraCreateWithoutDireccionEnvioInput[] | OrdenCompraUncheckedCreateWithoutDireccionEnvioInput[]
    connectOrCreate?: OrdenCompraCreateOrConnectWithoutDireccionEnvioInput | OrdenCompraCreateOrConnectWithoutDireccionEnvioInput[]
    upsert?: OrdenCompraUpsertWithWhereUniqueWithoutDireccionEnvioInput | OrdenCompraUpsertWithWhereUniqueWithoutDireccionEnvioInput[]
    createMany?: OrdenCompraCreateManyDireccionEnvioInputEnvelope
    set?: OrdenCompraWhereUniqueInput | OrdenCompraWhereUniqueInput[]
    disconnect?: OrdenCompraWhereUniqueInput | OrdenCompraWhereUniqueInput[]
    delete?: OrdenCompraWhereUniqueInput | OrdenCompraWhereUniqueInput[]
    connect?: OrdenCompraWhereUniqueInput | OrdenCompraWhereUniqueInput[]
    update?: OrdenCompraUpdateWithWhereUniqueWithoutDireccionEnvioInput | OrdenCompraUpdateWithWhereUniqueWithoutDireccionEnvioInput[]
    updateMany?: OrdenCompraUpdateManyWithWhereWithoutDireccionEnvioInput | OrdenCompraUpdateManyWithWhereWithoutDireccionEnvioInput[]
    deleteMany?: OrdenCompraScalarWhereInput | OrdenCompraScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumTipoProductoFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoProducto | EnumTipoProductoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoProducto[] | ListEnumTipoProductoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoProducto[] | ListEnumTipoProductoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoProductoFilter<$PrismaModel> | $Enums.TipoProducto
  }

  export type NestedEnumTipoProductoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoProducto | EnumTipoProductoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoProducto[] | ListEnumTipoProductoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoProducto[] | ListEnumTipoProductoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoProductoWithAggregatesFilter<$PrismaModel> | $Enums.TipoProducto
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoProductoFilter<$PrismaModel>
    _max?: NestedEnumTipoProductoFilter<$PrismaModel>
  }

  export type NestedEnumRolFilter<$PrismaModel = never> = {
    equals?: $Enums.Rol | EnumRolFieldRefInput<$PrismaModel>
    in?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    notIn?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    not?: NestedEnumRolFilter<$PrismaModel> | $Enums.Rol
  }

  export type NestedEnumRolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Rol | EnumRolFieldRefInput<$PrismaModel>
    in?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    notIn?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    not?: NestedEnumRolWithAggregatesFilter<$PrismaModel> | $Enums.Rol
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRolFilter<$PrismaModel>
    _max?: NestedEnumRolFilter<$PrismaModel>
  }

  export type ProductoCreateWithoutCategoriaInput = {
    nombre: string
    tipoProducto: $Enums.TipoProducto
    sexo: string
    detalles?: DetalleCreateNestedManyWithoutProductoInput
    itemsOrden?: ItemOrdenCreateNestedManyWithoutProductoInput
  }

  export type ProductoUncheckedCreateWithoutCategoriaInput = {
    id?: number
    nombre: string
    tipoProducto: $Enums.TipoProducto
    sexo: string
    detalles?: DetalleUncheckedCreateNestedManyWithoutProductoInput
    itemsOrden?: ItemOrdenUncheckedCreateNestedManyWithoutProductoInput
  }

  export type ProductoCreateOrConnectWithoutCategoriaInput = {
    where: ProductoWhereUniqueInput
    create: XOR<ProductoCreateWithoutCategoriaInput, ProductoUncheckedCreateWithoutCategoriaInput>
  }

  export type ProductoCreateManyCategoriaInputEnvelope = {
    data: ProductoCreateManyCategoriaInput | ProductoCreateManyCategoriaInput[]
    skipDuplicates?: boolean
  }

  export type ProductoUpsertWithWhereUniqueWithoutCategoriaInput = {
    where: ProductoWhereUniqueInput
    update: XOR<ProductoUpdateWithoutCategoriaInput, ProductoUncheckedUpdateWithoutCategoriaInput>
    create: XOR<ProductoCreateWithoutCategoriaInput, ProductoUncheckedCreateWithoutCategoriaInput>
  }

  export type ProductoUpdateWithWhereUniqueWithoutCategoriaInput = {
    where: ProductoWhereUniqueInput
    data: XOR<ProductoUpdateWithoutCategoriaInput, ProductoUncheckedUpdateWithoutCategoriaInput>
  }

  export type ProductoUpdateManyWithWhereWithoutCategoriaInput = {
    where: ProductoScalarWhereInput
    data: XOR<ProductoUpdateManyMutationInput, ProductoUncheckedUpdateManyWithoutCategoriaInput>
  }

  export type ProductoScalarWhereInput = {
    AND?: ProductoScalarWhereInput | ProductoScalarWhereInput[]
    OR?: ProductoScalarWhereInput[]
    NOT?: ProductoScalarWhereInput | ProductoScalarWhereInput[]
    id?: IntFilter<"Producto"> | number
    nombre?: StringFilter<"Producto"> | string
    categoriaId?: IntFilter<"Producto"> | number
    tipoProducto?: EnumTipoProductoFilter<"Producto"> | $Enums.TipoProducto
    sexo?: StringFilter<"Producto"> | string
  }

  export type PrecioCreateWithoutDescuentoInput = {
    precioCompra: number
    precioVenta: number
    detalle: DetalleCreateNestedOneWithoutPreciosInput
  }

  export type PrecioUncheckedCreateWithoutDescuentoInput = {
    id?: number
    precioCompra: number
    precioVenta: number
    detalleId: number
  }

  export type PrecioCreateOrConnectWithoutDescuentoInput = {
    where: PrecioWhereUniqueInput
    create: XOR<PrecioCreateWithoutDescuentoInput, PrecioUncheckedCreateWithoutDescuentoInput>
  }

  export type PrecioCreateManyDescuentoInputEnvelope = {
    data: PrecioCreateManyDescuentoInput | PrecioCreateManyDescuentoInput[]
    skipDuplicates?: boolean
  }

  export type PrecioUpsertWithWhereUniqueWithoutDescuentoInput = {
    where: PrecioWhereUniqueInput
    update: XOR<PrecioUpdateWithoutDescuentoInput, PrecioUncheckedUpdateWithoutDescuentoInput>
    create: XOR<PrecioCreateWithoutDescuentoInput, PrecioUncheckedCreateWithoutDescuentoInput>
  }

  export type PrecioUpdateWithWhereUniqueWithoutDescuentoInput = {
    where: PrecioWhereUniqueInput
    data: XOR<PrecioUpdateWithoutDescuentoInput, PrecioUncheckedUpdateWithoutDescuentoInput>
  }

  export type PrecioUpdateManyWithWhereWithoutDescuentoInput = {
    where: PrecioScalarWhereInput
    data: XOR<PrecioUpdateManyMutationInput, PrecioUncheckedUpdateManyWithoutDescuentoInput>
  }

  export type PrecioScalarWhereInput = {
    AND?: PrecioScalarWhereInput | PrecioScalarWhereInput[]
    OR?: PrecioScalarWhereInput[]
    NOT?: PrecioScalarWhereInput | PrecioScalarWhereInput[]
    id?: IntFilter<"Precio"> | number
    precioCompra?: FloatFilter<"Precio"> | number
    precioVenta?: FloatFilter<"Precio"> | number
    detalleId?: IntFilter<"Precio"> | number
    descuentoId?: IntFilter<"Precio"> | number
  }

  export type ProductoCreateWithoutDetallesInput = {
    nombre: string
    tipoProducto: $Enums.TipoProducto
    sexo: string
    categoria: CategoriaCreateNestedOneWithoutProductosInput
    itemsOrden?: ItemOrdenCreateNestedManyWithoutProductoInput
  }

  export type ProductoUncheckedCreateWithoutDetallesInput = {
    id?: number
    nombre: string
    categoriaId: number
    tipoProducto: $Enums.TipoProducto
    sexo: string
    itemsOrden?: ItemOrdenUncheckedCreateNestedManyWithoutProductoInput
  }

  export type ProductoCreateOrConnectWithoutDetallesInput = {
    where: ProductoWhereUniqueInput
    create: XOR<ProductoCreateWithoutDetallesInput, ProductoUncheckedCreateWithoutDetallesInput>
  }

  export type TalleCreateWithoutDetallesInput = {
    talle: string
  }

  export type TalleUncheckedCreateWithoutDetallesInput = {
    id?: number
    talle: string
  }

  export type TalleCreateOrConnectWithoutDetallesInput = {
    where: TalleWhereUniqueInput
    create: XOR<TalleCreateWithoutDetallesInput, TalleUncheckedCreateWithoutDetallesInput>
  }

  export type ImgCreateWithoutDetalleInput = {
    url: string
  }

  export type ImgUncheckedCreateWithoutDetalleInput = {
    id?: number
    url: string
  }

  export type ImgCreateOrConnectWithoutDetalleInput = {
    where: ImgWhereUniqueInput
    create: XOR<ImgCreateWithoutDetalleInput, ImgUncheckedCreateWithoutDetalleInput>
  }

  export type ImgCreateManyDetalleInputEnvelope = {
    data: ImgCreateManyDetalleInput | ImgCreateManyDetalleInput[]
    skipDuplicates?: boolean
  }

  export type PrecioCreateWithoutDetalleInput = {
    precioCompra: number
    precioVenta: number
    descuento: DescuentoCreateNestedOneWithoutPreciosInput
  }

  export type PrecioUncheckedCreateWithoutDetalleInput = {
    id?: number
    precioCompra: number
    precioVenta: number
    descuentoId: number
  }

  export type PrecioCreateOrConnectWithoutDetalleInput = {
    where: PrecioWhereUniqueInput
    create: XOR<PrecioCreateWithoutDetalleInput, PrecioUncheckedCreateWithoutDetalleInput>
  }

  export type PrecioCreateManyDetalleInputEnvelope = {
    data: PrecioCreateManyDetalleInput | PrecioCreateManyDetalleInput[]
    skipDuplicates?: boolean
  }

  export type ProductoUpsertWithoutDetallesInput = {
    update: XOR<ProductoUpdateWithoutDetallesInput, ProductoUncheckedUpdateWithoutDetallesInput>
    create: XOR<ProductoCreateWithoutDetallesInput, ProductoUncheckedCreateWithoutDetallesInput>
    where?: ProductoWhereInput
  }

  export type ProductoUpdateToOneWithWhereWithoutDetallesInput = {
    where?: ProductoWhereInput
    data: XOR<ProductoUpdateWithoutDetallesInput, ProductoUncheckedUpdateWithoutDetallesInput>
  }

  export type ProductoUpdateWithoutDetallesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    tipoProducto?: EnumTipoProductoFieldUpdateOperationsInput | $Enums.TipoProducto
    sexo?: StringFieldUpdateOperationsInput | string
    categoria?: CategoriaUpdateOneRequiredWithoutProductosNestedInput
    itemsOrden?: ItemOrdenUpdateManyWithoutProductoNestedInput
  }

  export type ProductoUncheckedUpdateWithoutDetallesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    categoriaId?: IntFieldUpdateOperationsInput | number
    tipoProducto?: EnumTipoProductoFieldUpdateOperationsInput | $Enums.TipoProducto
    sexo?: StringFieldUpdateOperationsInput | string
    itemsOrden?: ItemOrdenUncheckedUpdateManyWithoutProductoNestedInput
  }

  export type TalleUpsertWithoutDetallesInput = {
    update: XOR<TalleUpdateWithoutDetallesInput, TalleUncheckedUpdateWithoutDetallesInput>
    create: XOR<TalleCreateWithoutDetallesInput, TalleUncheckedCreateWithoutDetallesInput>
    where?: TalleWhereInput
  }

  export type TalleUpdateToOneWithWhereWithoutDetallesInput = {
    where?: TalleWhereInput
    data: XOR<TalleUpdateWithoutDetallesInput, TalleUncheckedUpdateWithoutDetallesInput>
  }

  export type TalleUpdateWithoutDetallesInput = {
    talle?: StringFieldUpdateOperationsInput | string
  }

  export type TalleUncheckedUpdateWithoutDetallesInput = {
    id?: IntFieldUpdateOperationsInput | number
    talle?: StringFieldUpdateOperationsInput | string
  }

  export type ImgUpsertWithWhereUniqueWithoutDetalleInput = {
    where: ImgWhereUniqueInput
    update: XOR<ImgUpdateWithoutDetalleInput, ImgUncheckedUpdateWithoutDetalleInput>
    create: XOR<ImgCreateWithoutDetalleInput, ImgUncheckedCreateWithoutDetalleInput>
  }

  export type ImgUpdateWithWhereUniqueWithoutDetalleInput = {
    where: ImgWhereUniqueInput
    data: XOR<ImgUpdateWithoutDetalleInput, ImgUncheckedUpdateWithoutDetalleInput>
  }

  export type ImgUpdateManyWithWhereWithoutDetalleInput = {
    where: ImgScalarWhereInput
    data: XOR<ImgUpdateManyMutationInput, ImgUncheckedUpdateManyWithoutDetalleInput>
  }

  export type ImgScalarWhereInput = {
    AND?: ImgScalarWhereInput | ImgScalarWhereInput[]
    OR?: ImgScalarWhereInput[]
    NOT?: ImgScalarWhereInput | ImgScalarWhereInput[]
    id?: IntFilter<"Img"> | number
    url?: StringFilter<"Img"> | string
    detalleId?: IntFilter<"Img"> | number
  }

  export type PrecioUpsertWithWhereUniqueWithoutDetalleInput = {
    where: PrecioWhereUniqueInput
    update: XOR<PrecioUpdateWithoutDetalleInput, PrecioUncheckedUpdateWithoutDetalleInput>
    create: XOR<PrecioCreateWithoutDetalleInput, PrecioUncheckedCreateWithoutDetalleInput>
  }

  export type PrecioUpdateWithWhereUniqueWithoutDetalleInput = {
    where: PrecioWhereUniqueInput
    data: XOR<PrecioUpdateWithoutDetalleInput, PrecioUncheckedUpdateWithoutDetalleInput>
  }

  export type PrecioUpdateManyWithWhereWithoutDetalleInput = {
    where: PrecioScalarWhereInput
    data: XOR<PrecioUpdateManyMutationInput, PrecioUncheckedUpdateManyWithoutDetalleInput>
  }

  export type UsuarioDireccionCreateWithoutDireccionInput = {
    usuario: UsuarioCreateNestedOneWithoutDireccionesInput
    ordenesEnvio?: OrdenCompraCreateNestedManyWithoutDireccionEnvioInput
  }

  export type UsuarioDireccionUncheckedCreateWithoutDireccionInput = {
    id?: number
    usuarioId: string
    ordenesEnvio?: OrdenCompraUncheckedCreateNestedManyWithoutDireccionEnvioInput
  }

  export type UsuarioDireccionCreateOrConnectWithoutDireccionInput = {
    where: UsuarioDireccionWhereUniqueInput
    create: XOR<UsuarioDireccionCreateWithoutDireccionInput, UsuarioDireccionUncheckedCreateWithoutDireccionInput>
  }

  export type UsuarioDireccionCreateManyDireccionInputEnvelope = {
    data: UsuarioDireccionCreateManyDireccionInput | UsuarioDireccionCreateManyDireccionInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioDireccionUpsertWithWhereUniqueWithoutDireccionInput = {
    where: UsuarioDireccionWhereUniqueInput
    update: XOR<UsuarioDireccionUpdateWithoutDireccionInput, UsuarioDireccionUncheckedUpdateWithoutDireccionInput>
    create: XOR<UsuarioDireccionCreateWithoutDireccionInput, UsuarioDireccionUncheckedCreateWithoutDireccionInput>
  }

  export type UsuarioDireccionUpdateWithWhereUniqueWithoutDireccionInput = {
    where: UsuarioDireccionWhereUniqueInput
    data: XOR<UsuarioDireccionUpdateWithoutDireccionInput, UsuarioDireccionUncheckedUpdateWithoutDireccionInput>
  }

  export type UsuarioDireccionUpdateManyWithWhereWithoutDireccionInput = {
    where: UsuarioDireccionScalarWhereInput
    data: XOR<UsuarioDireccionUpdateManyMutationInput, UsuarioDireccionUncheckedUpdateManyWithoutDireccionInput>
  }

  export type UsuarioDireccionScalarWhereInput = {
    AND?: UsuarioDireccionScalarWhereInput | UsuarioDireccionScalarWhereInput[]
    OR?: UsuarioDireccionScalarWhereInput[]
    NOT?: UsuarioDireccionScalarWhereInput | UsuarioDireccionScalarWhereInput[]
    id?: IntFilter<"UsuarioDireccion"> | number
    usuarioId?: StringFilter<"UsuarioDireccion"> | string
    direccionId?: IntFilter<"UsuarioDireccion"> | number
  }

  export type DetalleCreateWithoutImgsInput = {
    color: string
    estado: string
    stock: number
    producto: ProductoCreateNestedOneWithoutDetallesInput
    talle: TalleCreateNestedOneWithoutDetallesInput
    precios?: PrecioCreateNestedManyWithoutDetalleInput
  }

  export type DetalleUncheckedCreateWithoutImgsInput = {
    id?: number
    color: string
    estado: string
    stock: number
    productoId: number
    talleId: number
    precios?: PrecioUncheckedCreateNestedManyWithoutDetalleInput
  }

  export type DetalleCreateOrConnectWithoutImgsInput = {
    where: DetalleWhereUniqueInput
    create: XOR<DetalleCreateWithoutImgsInput, DetalleUncheckedCreateWithoutImgsInput>
  }

  export type DetalleUpsertWithoutImgsInput = {
    update: XOR<DetalleUpdateWithoutImgsInput, DetalleUncheckedUpdateWithoutImgsInput>
    create: XOR<DetalleCreateWithoutImgsInput, DetalleUncheckedCreateWithoutImgsInput>
    where?: DetalleWhereInput
  }

  export type DetalleUpdateToOneWithWhereWithoutImgsInput = {
    where?: DetalleWhereInput
    data: XOR<DetalleUpdateWithoutImgsInput, DetalleUncheckedUpdateWithoutImgsInput>
  }

  export type DetalleUpdateWithoutImgsInput = {
    color?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    producto?: ProductoUpdateOneRequiredWithoutDetallesNestedInput
    talle?: TalleUpdateOneRequiredWithoutDetallesNestedInput
    precios?: PrecioUpdateManyWithoutDetalleNestedInput
  }

  export type DetalleUncheckedUpdateWithoutImgsInput = {
    id?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    productoId?: IntFieldUpdateOperationsInput | number
    talleId?: IntFieldUpdateOperationsInput | number
    precios?: PrecioUncheckedUpdateManyWithoutDetalleNestedInput
  }

  export type OrdenCompraCreateWithoutItemsInput = {
    total: number
    descuento: number
    fechaCompra: string
    usuario: UsuarioCreateNestedOneWithoutOrdenesInput
    direccionEnvio: UsuarioDireccionCreateNestedOneWithoutOrdenesEnvioInput
  }

  export type OrdenCompraUncheckedCreateWithoutItemsInput = {
    id?: number
    total: number
    descuento: number
    fechaCompra: string
    usuarioId: string
    direccionEnvioId: number
  }

  export type OrdenCompraCreateOrConnectWithoutItemsInput = {
    where: OrdenCompraWhereUniqueInput
    create: XOR<OrdenCompraCreateWithoutItemsInput, OrdenCompraUncheckedCreateWithoutItemsInput>
  }

  export type ProductoCreateWithoutItemsOrdenInput = {
    nombre: string
    tipoProducto: $Enums.TipoProducto
    sexo: string
    categoria: CategoriaCreateNestedOneWithoutProductosInput
    detalles?: DetalleCreateNestedManyWithoutProductoInput
  }

  export type ProductoUncheckedCreateWithoutItemsOrdenInput = {
    id?: number
    nombre: string
    categoriaId: number
    tipoProducto: $Enums.TipoProducto
    sexo: string
    detalles?: DetalleUncheckedCreateNestedManyWithoutProductoInput
  }

  export type ProductoCreateOrConnectWithoutItemsOrdenInput = {
    where: ProductoWhereUniqueInput
    create: XOR<ProductoCreateWithoutItemsOrdenInput, ProductoUncheckedCreateWithoutItemsOrdenInput>
  }

  export type OrdenCompraUpsertWithoutItemsInput = {
    update: XOR<OrdenCompraUpdateWithoutItemsInput, OrdenCompraUncheckedUpdateWithoutItemsInput>
    create: XOR<OrdenCompraCreateWithoutItemsInput, OrdenCompraUncheckedCreateWithoutItemsInput>
    where?: OrdenCompraWhereInput
  }

  export type OrdenCompraUpdateToOneWithWhereWithoutItemsInput = {
    where?: OrdenCompraWhereInput
    data: XOR<OrdenCompraUpdateWithoutItemsInput, OrdenCompraUncheckedUpdateWithoutItemsInput>
  }

  export type OrdenCompraUpdateWithoutItemsInput = {
    total?: FloatFieldUpdateOperationsInput | number
    descuento?: FloatFieldUpdateOperationsInput | number
    fechaCompra?: StringFieldUpdateOperationsInput | string
    usuario?: UsuarioUpdateOneRequiredWithoutOrdenesNestedInput
    direccionEnvio?: UsuarioDireccionUpdateOneRequiredWithoutOrdenesEnvioNestedInput
  }

  export type OrdenCompraUncheckedUpdateWithoutItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    descuento?: FloatFieldUpdateOperationsInput | number
    fechaCompra?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    direccionEnvioId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductoUpsertWithoutItemsOrdenInput = {
    update: XOR<ProductoUpdateWithoutItemsOrdenInput, ProductoUncheckedUpdateWithoutItemsOrdenInput>
    create: XOR<ProductoCreateWithoutItemsOrdenInput, ProductoUncheckedCreateWithoutItemsOrdenInput>
    where?: ProductoWhereInput
  }

  export type ProductoUpdateToOneWithWhereWithoutItemsOrdenInput = {
    where?: ProductoWhereInput
    data: XOR<ProductoUpdateWithoutItemsOrdenInput, ProductoUncheckedUpdateWithoutItemsOrdenInput>
  }

  export type ProductoUpdateWithoutItemsOrdenInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    tipoProducto?: EnumTipoProductoFieldUpdateOperationsInput | $Enums.TipoProducto
    sexo?: StringFieldUpdateOperationsInput | string
    categoria?: CategoriaUpdateOneRequiredWithoutProductosNestedInput
    detalles?: DetalleUpdateManyWithoutProductoNestedInput
  }

  export type ProductoUncheckedUpdateWithoutItemsOrdenInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    categoriaId?: IntFieldUpdateOperationsInput | number
    tipoProducto?: EnumTipoProductoFieldUpdateOperationsInput | $Enums.TipoProducto
    sexo?: StringFieldUpdateOperationsInput | string
    detalles?: DetalleUncheckedUpdateManyWithoutProductoNestedInput
  }

  export type UsuarioCreateWithoutOrdenesInput = {
    id: string
    nombre: string
    contraseña: string
    email: string
    dni: string
    rol: $Enums.Rol
    direcciones?: UsuarioDireccionCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutOrdenesInput = {
    id: string
    nombre: string
    contraseña: string
    email: string
    dni: string
    rol: $Enums.Rol
    direcciones?: UsuarioDireccionUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutOrdenesInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutOrdenesInput, UsuarioUncheckedCreateWithoutOrdenesInput>
  }

  export type UsuarioDireccionCreateWithoutOrdenesEnvioInput = {
    usuario: UsuarioCreateNestedOneWithoutDireccionesInput
    direccion: DireccionCreateNestedOneWithoutUsuariosInput
  }

  export type UsuarioDireccionUncheckedCreateWithoutOrdenesEnvioInput = {
    id?: number
    usuarioId: string
    direccionId: number
  }

  export type UsuarioDireccionCreateOrConnectWithoutOrdenesEnvioInput = {
    where: UsuarioDireccionWhereUniqueInput
    create: XOR<UsuarioDireccionCreateWithoutOrdenesEnvioInput, UsuarioDireccionUncheckedCreateWithoutOrdenesEnvioInput>
  }

  export type ItemOrdenCreateWithoutOrdenCompraInput = {
    cantidad: number
    producto: ProductoCreateNestedOneWithoutItemsOrdenInput
  }

  export type ItemOrdenUncheckedCreateWithoutOrdenCompraInput = {
    id?: number
    cantidad: number
    productoId: number
  }

  export type ItemOrdenCreateOrConnectWithoutOrdenCompraInput = {
    where: ItemOrdenWhereUniqueInput
    create: XOR<ItemOrdenCreateWithoutOrdenCompraInput, ItemOrdenUncheckedCreateWithoutOrdenCompraInput>
  }

  export type ItemOrdenCreateManyOrdenCompraInputEnvelope = {
    data: ItemOrdenCreateManyOrdenCompraInput | ItemOrdenCreateManyOrdenCompraInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioUpsertWithoutOrdenesInput = {
    update: XOR<UsuarioUpdateWithoutOrdenesInput, UsuarioUncheckedUpdateWithoutOrdenesInput>
    create: XOR<UsuarioCreateWithoutOrdenesInput, UsuarioUncheckedCreateWithoutOrdenesInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutOrdenesInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutOrdenesInput, UsuarioUncheckedUpdateWithoutOrdenesInput>
  }

  export type UsuarioUpdateWithoutOrdenesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    contraseña?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    direcciones?: UsuarioDireccionUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutOrdenesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    contraseña?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    direcciones?: UsuarioDireccionUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioDireccionUpsertWithoutOrdenesEnvioInput = {
    update: XOR<UsuarioDireccionUpdateWithoutOrdenesEnvioInput, UsuarioDireccionUncheckedUpdateWithoutOrdenesEnvioInput>
    create: XOR<UsuarioDireccionCreateWithoutOrdenesEnvioInput, UsuarioDireccionUncheckedCreateWithoutOrdenesEnvioInput>
    where?: UsuarioDireccionWhereInput
  }

  export type UsuarioDireccionUpdateToOneWithWhereWithoutOrdenesEnvioInput = {
    where?: UsuarioDireccionWhereInput
    data: XOR<UsuarioDireccionUpdateWithoutOrdenesEnvioInput, UsuarioDireccionUncheckedUpdateWithoutOrdenesEnvioInput>
  }

  export type UsuarioDireccionUpdateWithoutOrdenesEnvioInput = {
    usuario?: UsuarioUpdateOneRequiredWithoutDireccionesNestedInput
    direccion?: DireccionUpdateOneRequiredWithoutUsuariosNestedInput
  }

  export type UsuarioDireccionUncheckedUpdateWithoutOrdenesEnvioInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: StringFieldUpdateOperationsInput | string
    direccionId?: IntFieldUpdateOperationsInput | number
  }

  export type ItemOrdenUpsertWithWhereUniqueWithoutOrdenCompraInput = {
    where: ItemOrdenWhereUniqueInput
    update: XOR<ItemOrdenUpdateWithoutOrdenCompraInput, ItemOrdenUncheckedUpdateWithoutOrdenCompraInput>
    create: XOR<ItemOrdenCreateWithoutOrdenCompraInput, ItemOrdenUncheckedCreateWithoutOrdenCompraInput>
  }

  export type ItemOrdenUpdateWithWhereUniqueWithoutOrdenCompraInput = {
    where: ItemOrdenWhereUniqueInput
    data: XOR<ItemOrdenUpdateWithoutOrdenCompraInput, ItemOrdenUncheckedUpdateWithoutOrdenCompraInput>
  }

  export type ItemOrdenUpdateManyWithWhereWithoutOrdenCompraInput = {
    where: ItemOrdenScalarWhereInput
    data: XOR<ItemOrdenUpdateManyMutationInput, ItemOrdenUncheckedUpdateManyWithoutOrdenCompraInput>
  }

  export type ItemOrdenScalarWhereInput = {
    AND?: ItemOrdenScalarWhereInput | ItemOrdenScalarWhereInput[]
    OR?: ItemOrdenScalarWhereInput[]
    NOT?: ItemOrdenScalarWhereInput | ItemOrdenScalarWhereInput[]
    id?: IntFilter<"ItemOrden"> | number
    cantidad?: IntFilter<"ItemOrden"> | number
    ordenCompraId?: IntFilter<"ItemOrden"> | number
    productoId?: IntFilter<"ItemOrden"> | number
  }

  export type DetalleCreateWithoutPreciosInput = {
    color: string
    estado: string
    stock: number
    producto: ProductoCreateNestedOneWithoutDetallesInput
    talle: TalleCreateNestedOneWithoutDetallesInput
    imgs?: ImgCreateNestedManyWithoutDetalleInput
  }

  export type DetalleUncheckedCreateWithoutPreciosInput = {
    id?: number
    color: string
    estado: string
    stock: number
    productoId: number
    talleId: number
    imgs?: ImgUncheckedCreateNestedManyWithoutDetalleInput
  }

  export type DetalleCreateOrConnectWithoutPreciosInput = {
    where: DetalleWhereUniqueInput
    create: XOR<DetalleCreateWithoutPreciosInput, DetalleUncheckedCreateWithoutPreciosInput>
  }

  export type DescuentoCreateWithoutPreciosInput = {
    porcentaje: number
    fechaInicio: Date | string
    fechaFin: Date | string
  }

  export type DescuentoUncheckedCreateWithoutPreciosInput = {
    id?: number
    porcentaje: number
    fechaInicio: Date | string
    fechaFin: Date | string
  }

  export type DescuentoCreateOrConnectWithoutPreciosInput = {
    where: DescuentoWhereUniqueInput
    create: XOR<DescuentoCreateWithoutPreciosInput, DescuentoUncheckedCreateWithoutPreciosInput>
  }

  export type DetalleUpsertWithoutPreciosInput = {
    update: XOR<DetalleUpdateWithoutPreciosInput, DetalleUncheckedUpdateWithoutPreciosInput>
    create: XOR<DetalleCreateWithoutPreciosInput, DetalleUncheckedCreateWithoutPreciosInput>
    where?: DetalleWhereInput
  }

  export type DetalleUpdateToOneWithWhereWithoutPreciosInput = {
    where?: DetalleWhereInput
    data: XOR<DetalleUpdateWithoutPreciosInput, DetalleUncheckedUpdateWithoutPreciosInput>
  }

  export type DetalleUpdateWithoutPreciosInput = {
    color?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    producto?: ProductoUpdateOneRequiredWithoutDetallesNestedInput
    talle?: TalleUpdateOneRequiredWithoutDetallesNestedInput
    imgs?: ImgUpdateManyWithoutDetalleNestedInput
  }

  export type DetalleUncheckedUpdateWithoutPreciosInput = {
    id?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    productoId?: IntFieldUpdateOperationsInput | number
    talleId?: IntFieldUpdateOperationsInput | number
    imgs?: ImgUncheckedUpdateManyWithoutDetalleNestedInput
  }

  export type DescuentoUpsertWithoutPreciosInput = {
    update: XOR<DescuentoUpdateWithoutPreciosInput, DescuentoUncheckedUpdateWithoutPreciosInput>
    create: XOR<DescuentoCreateWithoutPreciosInput, DescuentoUncheckedCreateWithoutPreciosInput>
    where?: DescuentoWhereInput
  }

  export type DescuentoUpdateToOneWithWhereWithoutPreciosInput = {
    where?: DescuentoWhereInput
    data: XOR<DescuentoUpdateWithoutPreciosInput, DescuentoUncheckedUpdateWithoutPreciosInput>
  }

  export type DescuentoUpdateWithoutPreciosInput = {
    porcentaje?: FloatFieldUpdateOperationsInput | number
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DescuentoUncheckedUpdateWithoutPreciosInput = {
    id?: IntFieldUpdateOperationsInput | number
    porcentaje?: FloatFieldUpdateOperationsInput | number
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoriaCreateWithoutProductosInput = {
    nombre: string
  }

  export type CategoriaUncheckedCreateWithoutProductosInput = {
    id?: number
    nombre: string
  }

  export type CategoriaCreateOrConnectWithoutProductosInput = {
    where: CategoriaWhereUniqueInput
    create: XOR<CategoriaCreateWithoutProductosInput, CategoriaUncheckedCreateWithoutProductosInput>
  }

  export type DetalleCreateWithoutProductoInput = {
    color: string
    estado: string
    stock: number
    talle: TalleCreateNestedOneWithoutDetallesInput
    imgs?: ImgCreateNestedManyWithoutDetalleInput
    precios?: PrecioCreateNestedManyWithoutDetalleInput
  }

  export type DetalleUncheckedCreateWithoutProductoInput = {
    id?: number
    color: string
    estado: string
    stock: number
    talleId: number
    imgs?: ImgUncheckedCreateNestedManyWithoutDetalleInput
    precios?: PrecioUncheckedCreateNestedManyWithoutDetalleInput
  }

  export type DetalleCreateOrConnectWithoutProductoInput = {
    where: DetalleWhereUniqueInput
    create: XOR<DetalleCreateWithoutProductoInput, DetalleUncheckedCreateWithoutProductoInput>
  }

  export type DetalleCreateManyProductoInputEnvelope = {
    data: DetalleCreateManyProductoInput | DetalleCreateManyProductoInput[]
    skipDuplicates?: boolean
  }

  export type ItemOrdenCreateWithoutProductoInput = {
    cantidad: number
    ordenCompra: OrdenCompraCreateNestedOneWithoutItemsInput
  }

  export type ItemOrdenUncheckedCreateWithoutProductoInput = {
    id?: number
    cantidad: number
    ordenCompraId: number
  }

  export type ItemOrdenCreateOrConnectWithoutProductoInput = {
    where: ItemOrdenWhereUniqueInput
    create: XOR<ItemOrdenCreateWithoutProductoInput, ItemOrdenUncheckedCreateWithoutProductoInput>
  }

  export type ItemOrdenCreateManyProductoInputEnvelope = {
    data: ItemOrdenCreateManyProductoInput | ItemOrdenCreateManyProductoInput[]
    skipDuplicates?: boolean
  }

  export type CategoriaUpsertWithoutProductosInput = {
    update: XOR<CategoriaUpdateWithoutProductosInput, CategoriaUncheckedUpdateWithoutProductosInput>
    create: XOR<CategoriaCreateWithoutProductosInput, CategoriaUncheckedCreateWithoutProductosInput>
    where?: CategoriaWhereInput
  }

  export type CategoriaUpdateToOneWithWhereWithoutProductosInput = {
    where?: CategoriaWhereInput
    data: XOR<CategoriaUpdateWithoutProductosInput, CategoriaUncheckedUpdateWithoutProductosInput>
  }

  export type CategoriaUpdateWithoutProductosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type CategoriaUncheckedUpdateWithoutProductosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type DetalleUpsertWithWhereUniqueWithoutProductoInput = {
    where: DetalleWhereUniqueInput
    update: XOR<DetalleUpdateWithoutProductoInput, DetalleUncheckedUpdateWithoutProductoInput>
    create: XOR<DetalleCreateWithoutProductoInput, DetalleUncheckedCreateWithoutProductoInput>
  }

  export type DetalleUpdateWithWhereUniqueWithoutProductoInput = {
    where: DetalleWhereUniqueInput
    data: XOR<DetalleUpdateWithoutProductoInput, DetalleUncheckedUpdateWithoutProductoInput>
  }

  export type DetalleUpdateManyWithWhereWithoutProductoInput = {
    where: DetalleScalarWhereInput
    data: XOR<DetalleUpdateManyMutationInput, DetalleUncheckedUpdateManyWithoutProductoInput>
  }

  export type DetalleScalarWhereInput = {
    AND?: DetalleScalarWhereInput | DetalleScalarWhereInput[]
    OR?: DetalleScalarWhereInput[]
    NOT?: DetalleScalarWhereInput | DetalleScalarWhereInput[]
    id?: IntFilter<"Detalle"> | number
    color?: StringFilter<"Detalle"> | string
    estado?: StringFilter<"Detalle"> | string
    stock?: IntFilter<"Detalle"> | number
    productoId?: IntFilter<"Detalle"> | number
    talleId?: IntFilter<"Detalle"> | number
  }

  export type ItemOrdenUpsertWithWhereUniqueWithoutProductoInput = {
    where: ItemOrdenWhereUniqueInput
    update: XOR<ItemOrdenUpdateWithoutProductoInput, ItemOrdenUncheckedUpdateWithoutProductoInput>
    create: XOR<ItemOrdenCreateWithoutProductoInput, ItemOrdenUncheckedCreateWithoutProductoInput>
  }

  export type ItemOrdenUpdateWithWhereUniqueWithoutProductoInput = {
    where: ItemOrdenWhereUniqueInput
    data: XOR<ItemOrdenUpdateWithoutProductoInput, ItemOrdenUncheckedUpdateWithoutProductoInput>
  }

  export type ItemOrdenUpdateManyWithWhereWithoutProductoInput = {
    where: ItemOrdenScalarWhereInput
    data: XOR<ItemOrdenUpdateManyMutationInput, ItemOrdenUncheckedUpdateManyWithoutProductoInput>
  }

  export type DetalleCreateWithoutTalleInput = {
    color: string
    estado: string
    stock: number
    producto: ProductoCreateNestedOneWithoutDetallesInput
    imgs?: ImgCreateNestedManyWithoutDetalleInput
    precios?: PrecioCreateNestedManyWithoutDetalleInput
  }

  export type DetalleUncheckedCreateWithoutTalleInput = {
    id?: number
    color: string
    estado: string
    stock: number
    productoId: number
    imgs?: ImgUncheckedCreateNestedManyWithoutDetalleInput
    precios?: PrecioUncheckedCreateNestedManyWithoutDetalleInput
  }

  export type DetalleCreateOrConnectWithoutTalleInput = {
    where: DetalleWhereUniqueInput
    create: XOR<DetalleCreateWithoutTalleInput, DetalleUncheckedCreateWithoutTalleInput>
  }

  export type DetalleCreateManyTalleInputEnvelope = {
    data: DetalleCreateManyTalleInput | DetalleCreateManyTalleInput[]
    skipDuplicates?: boolean
  }

  export type DetalleUpsertWithWhereUniqueWithoutTalleInput = {
    where: DetalleWhereUniqueInput
    update: XOR<DetalleUpdateWithoutTalleInput, DetalleUncheckedUpdateWithoutTalleInput>
    create: XOR<DetalleCreateWithoutTalleInput, DetalleUncheckedCreateWithoutTalleInput>
  }

  export type DetalleUpdateWithWhereUniqueWithoutTalleInput = {
    where: DetalleWhereUniqueInput
    data: XOR<DetalleUpdateWithoutTalleInput, DetalleUncheckedUpdateWithoutTalleInput>
  }

  export type DetalleUpdateManyWithWhereWithoutTalleInput = {
    where: DetalleScalarWhereInput
    data: XOR<DetalleUpdateManyMutationInput, DetalleUncheckedUpdateManyWithoutTalleInput>
  }

  export type UsuarioDireccionCreateWithoutUsuarioInput = {
    direccion: DireccionCreateNestedOneWithoutUsuariosInput
    ordenesEnvio?: OrdenCompraCreateNestedManyWithoutDireccionEnvioInput
  }

  export type UsuarioDireccionUncheckedCreateWithoutUsuarioInput = {
    id?: number
    direccionId: number
    ordenesEnvio?: OrdenCompraUncheckedCreateNestedManyWithoutDireccionEnvioInput
  }

  export type UsuarioDireccionCreateOrConnectWithoutUsuarioInput = {
    where: UsuarioDireccionWhereUniqueInput
    create: XOR<UsuarioDireccionCreateWithoutUsuarioInput, UsuarioDireccionUncheckedCreateWithoutUsuarioInput>
  }

  export type UsuarioDireccionCreateManyUsuarioInputEnvelope = {
    data: UsuarioDireccionCreateManyUsuarioInput | UsuarioDireccionCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type OrdenCompraCreateWithoutUsuarioInput = {
    total: number
    descuento: number
    fechaCompra: string
    direccionEnvio: UsuarioDireccionCreateNestedOneWithoutOrdenesEnvioInput
    items?: ItemOrdenCreateNestedManyWithoutOrdenCompraInput
  }

  export type OrdenCompraUncheckedCreateWithoutUsuarioInput = {
    id?: number
    total: number
    descuento: number
    fechaCompra: string
    direccionEnvioId: number
    items?: ItemOrdenUncheckedCreateNestedManyWithoutOrdenCompraInput
  }

  export type OrdenCompraCreateOrConnectWithoutUsuarioInput = {
    where: OrdenCompraWhereUniqueInput
    create: XOR<OrdenCompraCreateWithoutUsuarioInput, OrdenCompraUncheckedCreateWithoutUsuarioInput>
  }

  export type OrdenCompraCreateManyUsuarioInputEnvelope = {
    data: OrdenCompraCreateManyUsuarioInput | OrdenCompraCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioDireccionUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: UsuarioDireccionWhereUniqueInput
    update: XOR<UsuarioDireccionUpdateWithoutUsuarioInput, UsuarioDireccionUncheckedUpdateWithoutUsuarioInput>
    create: XOR<UsuarioDireccionCreateWithoutUsuarioInput, UsuarioDireccionUncheckedCreateWithoutUsuarioInput>
  }

  export type UsuarioDireccionUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: UsuarioDireccionWhereUniqueInput
    data: XOR<UsuarioDireccionUpdateWithoutUsuarioInput, UsuarioDireccionUncheckedUpdateWithoutUsuarioInput>
  }

  export type UsuarioDireccionUpdateManyWithWhereWithoutUsuarioInput = {
    where: UsuarioDireccionScalarWhereInput
    data: XOR<UsuarioDireccionUpdateManyMutationInput, UsuarioDireccionUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type OrdenCompraUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: OrdenCompraWhereUniqueInput
    update: XOR<OrdenCompraUpdateWithoutUsuarioInput, OrdenCompraUncheckedUpdateWithoutUsuarioInput>
    create: XOR<OrdenCompraCreateWithoutUsuarioInput, OrdenCompraUncheckedCreateWithoutUsuarioInput>
  }

  export type OrdenCompraUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: OrdenCompraWhereUniqueInput
    data: XOR<OrdenCompraUpdateWithoutUsuarioInput, OrdenCompraUncheckedUpdateWithoutUsuarioInput>
  }

  export type OrdenCompraUpdateManyWithWhereWithoutUsuarioInput = {
    where: OrdenCompraScalarWhereInput
    data: XOR<OrdenCompraUpdateManyMutationInput, OrdenCompraUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type OrdenCompraScalarWhereInput = {
    AND?: OrdenCompraScalarWhereInput | OrdenCompraScalarWhereInput[]
    OR?: OrdenCompraScalarWhereInput[]
    NOT?: OrdenCompraScalarWhereInput | OrdenCompraScalarWhereInput[]
    id?: IntFilter<"OrdenCompra"> | number
    total?: FloatFilter<"OrdenCompra"> | number
    descuento?: FloatFilter<"OrdenCompra"> | number
    fechaCompra?: StringFilter<"OrdenCompra"> | string
    usuarioId?: StringFilter<"OrdenCompra"> | string
    direccionEnvioId?: IntFilter<"OrdenCompra"> | number
  }

  export type UsuarioCreateWithoutDireccionesInput = {
    id: string
    nombre: string
    contraseña: string
    email: string
    dni: string
    rol: $Enums.Rol
    ordenes?: OrdenCompraCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutDireccionesInput = {
    id: string
    nombre: string
    contraseña: string
    email: string
    dni: string
    rol: $Enums.Rol
    ordenes?: OrdenCompraUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutDireccionesInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutDireccionesInput, UsuarioUncheckedCreateWithoutDireccionesInput>
  }

  export type DireccionCreateWithoutUsuariosInput = {
    localidad: string
    pais: string
    provincia: string
    departamento: string
    codigoPostal: string
  }

  export type DireccionUncheckedCreateWithoutUsuariosInput = {
    id?: number
    localidad: string
    pais: string
    provincia: string
    departamento: string
    codigoPostal: string
  }

  export type DireccionCreateOrConnectWithoutUsuariosInput = {
    where: DireccionWhereUniqueInput
    create: XOR<DireccionCreateWithoutUsuariosInput, DireccionUncheckedCreateWithoutUsuariosInput>
  }

  export type OrdenCompraCreateWithoutDireccionEnvioInput = {
    total: number
    descuento: number
    fechaCompra: string
    usuario: UsuarioCreateNestedOneWithoutOrdenesInput
    items?: ItemOrdenCreateNestedManyWithoutOrdenCompraInput
  }

  export type OrdenCompraUncheckedCreateWithoutDireccionEnvioInput = {
    id?: number
    total: number
    descuento: number
    fechaCompra: string
    usuarioId: string
    items?: ItemOrdenUncheckedCreateNestedManyWithoutOrdenCompraInput
  }

  export type OrdenCompraCreateOrConnectWithoutDireccionEnvioInput = {
    where: OrdenCompraWhereUniqueInput
    create: XOR<OrdenCompraCreateWithoutDireccionEnvioInput, OrdenCompraUncheckedCreateWithoutDireccionEnvioInput>
  }

  export type OrdenCompraCreateManyDireccionEnvioInputEnvelope = {
    data: OrdenCompraCreateManyDireccionEnvioInput | OrdenCompraCreateManyDireccionEnvioInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioUpsertWithoutDireccionesInput = {
    update: XOR<UsuarioUpdateWithoutDireccionesInput, UsuarioUncheckedUpdateWithoutDireccionesInput>
    create: XOR<UsuarioCreateWithoutDireccionesInput, UsuarioUncheckedCreateWithoutDireccionesInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutDireccionesInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutDireccionesInput, UsuarioUncheckedUpdateWithoutDireccionesInput>
  }

  export type UsuarioUpdateWithoutDireccionesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    contraseña?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    ordenes?: OrdenCompraUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutDireccionesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    contraseña?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    ordenes?: OrdenCompraUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type DireccionUpsertWithoutUsuariosInput = {
    update: XOR<DireccionUpdateWithoutUsuariosInput, DireccionUncheckedUpdateWithoutUsuariosInput>
    create: XOR<DireccionCreateWithoutUsuariosInput, DireccionUncheckedCreateWithoutUsuariosInput>
    where?: DireccionWhereInput
  }

  export type DireccionUpdateToOneWithWhereWithoutUsuariosInput = {
    where?: DireccionWhereInput
    data: XOR<DireccionUpdateWithoutUsuariosInput, DireccionUncheckedUpdateWithoutUsuariosInput>
  }

  export type DireccionUpdateWithoutUsuariosInput = {
    localidad?: StringFieldUpdateOperationsInput | string
    pais?: StringFieldUpdateOperationsInput | string
    provincia?: StringFieldUpdateOperationsInput | string
    departamento?: StringFieldUpdateOperationsInput | string
    codigoPostal?: StringFieldUpdateOperationsInput | string
  }

  export type DireccionUncheckedUpdateWithoutUsuariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    localidad?: StringFieldUpdateOperationsInput | string
    pais?: StringFieldUpdateOperationsInput | string
    provincia?: StringFieldUpdateOperationsInput | string
    departamento?: StringFieldUpdateOperationsInput | string
    codigoPostal?: StringFieldUpdateOperationsInput | string
  }

  export type OrdenCompraUpsertWithWhereUniqueWithoutDireccionEnvioInput = {
    where: OrdenCompraWhereUniqueInput
    update: XOR<OrdenCompraUpdateWithoutDireccionEnvioInput, OrdenCompraUncheckedUpdateWithoutDireccionEnvioInput>
    create: XOR<OrdenCompraCreateWithoutDireccionEnvioInput, OrdenCompraUncheckedCreateWithoutDireccionEnvioInput>
  }

  export type OrdenCompraUpdateWithWhereUniqueWithoutDireccionEnvioInput = {
    where: OrdenCompraWhereUniqueInput
    data: XOR<OrdenCompraUpdateWithoutDireccionEnvioInput, OrdenCompraUncheckedUpdateWithoutDireccionEnvioInput>
  }

  export type OrdenCompraUpdateManyWithWhereWithoutDireccionEnvioInput = {
    where: OrdenCompraScalarWhereInput
    data: XOR<OrdenCompraUpdateManyMutationInput, OrdenCompraUncheckedUpdateManyWithoutDireccionEnvioInput>
  }

  export type ProductoCreateManyCategoriaInput = {
    id?: number
    nombre: string
    tipoProducto: $Enums.TipoProducto
    sexo: string
  }

  export type ProductoUpdateWithoutCategoriaInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    tipoProducto?: EnumTipoProductoFieldUpdateOperationsInput | $Enums.TipoProducto
    sexo?: StringFieldUpdateOperationsInput | string
    detalles?: DetalleUpdateManyWithoutProductoNestedInput
    itemsOrden?: ItemOrdenUpdateManyWithoutProductoNestedInput
  }

  export type ProductoUncheckedUpdateWithoutCategoriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    tipoProducto?: EnumTipoProductoFieldUpdateOperationsInput | $Enums.TipoProducto
    sexo?: StringFieldUpdateOperationsInput | string
    detalles?: DetalleUncheckedUpdateManyWithoutProductoNestedInput
    itemsOrden?: ItemOrdenUncheckedUpdateManyWithoutProductoNestedInput
  }

  export type ProductoUncheckedUpdateManyWithoutCategoriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    tipoProducto?: EnumTipoProductoFieldUpdateOperationsInput | $Enums.TipoProducto
    sexo?: StringFieldUpdateOperationsInput | string
  }

  export type PrecioCreateManyDescuentoInput = {
    id?: number
    precioCompra: number
    precioVenta: number
    detalleId: number
  }

  export type PrecioUpdateWithoutDescuentoInput = {
    precioCompra?: FloatFieldUpdateOperationsInput | number
    precioVenta?: FloatFieldUpdateOperationsInput | number
    detalle?: DetalleUpdateOneRequiredWithoutPreciosNestedInput
  }

  export type PrecioUncheckedUpdateWithoutDescuentoInput = {
    id?: IntFieldUpdateOperationsInput | number
    precioCompra?: FloatFieldUpdateOperationsInput | number
    precioVenta?: FloatFieldUpdateOperationsInput | number
    detalleId?: IntFieldUpdateOperationsInput | number
  }

  export type PrecioUncheckedUpdateManyWithoutDescuentoInput = {
    id?: IntFieldUpdateOperationsInput | number
    precioCompra?: FloatFieldUpdateOperationsInput | number
    precioVenta?: FloatFieldUpdateOperationsInput | number
    detalleId?: IntFieldUpdateOperationsInput | number
  }

  export type ImgCreateManyDetalleInput = {
    id?: number
    url: string
  }

  export type PrecioCreateManyDetalleInput = {
    id?: number
    precioCompra: number
    precioVenta: number
    descuentoId: number
  }

  export type ImgUpdateWithoutDetalleInput = {
    url?: StringFieldUpdateOperationsInput | string
  }

  export type ImgUncheckedUpdateWithoutDetalleInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
  }

  export type ImgUncheckedUpdateManyWithoutDetalleInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
  }

  export type PrecioUpdateWithoutDetalleInput = {
    precioCompra?: FloatFieldUpdateOperationsInput | number
    precioVenta?: FloatFieldUpdateOperationsInput | number
    descuento?: DescuentoUpdateOneRequiredWithoutPreciosNestedInput
  }

  export type PrecioUncheckedUpdateWithoutDetalleInput = {
    id?: IntFieldUpdateOperationsInput | number
    precioCompra?: FloatFieldUpdateOperationsInput | number
    precioVenta?: FloatFieldUpdateOperationsInput | number
    descuentoId?: IntFieldUpdateOperationsInput | number
  }

  export type PrecioUncheckedUpdateManyWithoutDetalleInput = {
    id?: IntFieldUpdateOperationsInput | number
    precioCompra?: FloatFieldUpdateOperationsInput | number
    precioVenta?: FloatFieldUpdateOperationsInput | number
    descuentoId?: IntFieldUpdateOperationsInput | number
  }

  export type UsuarioDireccionCreateManyDireccionInput = {
    id?: number
    usuarioId: string
  }

  export type UsuarioDireccionUpdateWithoutDireccionInput = {
    usuario?: UsuarioUpdateOneRequiredWithoutDireccionesNestedInput
    ordenesEnvio?: OrdenCompraUpdateManyWithoutDireccionEnvioNestedInput
  }

  export type UsuarioDireccionUncheckedUpdateWithoutDireccionInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: StringFieldUpdateOperationsInput | string
    ordenesEnvio?: OrdenCompraUncheckedUpdateManyWithoutDireccionEnvioNestedInput
  }

  export type UsuarioDireccionUncheckedUpdateManyWithoutDireccionInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: StringFieldUpdateOperationsInput | string
  }

  export type ItemOrdenCreateManyOrdenCompraInput = {
    id?: number
    cantidad: number
    productoId: number
  }

  export type ItemOrdenUpdateWithoutOrdenCompraInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    producto?: ProductoUpdateOneRequiredWithoutItemsOrdenNestedInput
  }

  export type ItemOrdenUncheckedUpdateWithoutOrdenCompraInput = {
    id?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    productoId?: IntFieldUpdateOperationsInput | number
  }

  export type ItemOrdenUncheckedUpdateManyWithoutOrdenCompraInput = {
    id?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    productoId?: IntFieldUpdateOperationsInput | number
  }

  export type DetalleCreateManyProductoInput = {
    id?: number
    color: string
    estado: string
    stock: number
    talleId: number
  }

  export type ItemOrdenCreateManyProductoInput = {
    id?: number
    cantidad: number
    ordenCompraId: number
  }

  export type DetalleUpdateWithoutProductoInput = {
    color?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    talle?: TalleUpdateOneRequiredWithoutDetallesNestedInput
    imgs?: ImgUpdateManyWithoutDetalleNestedInput
    precios?: PrecioUpdateManyWithoutDetalleNestedInput
  }

  export type DetalleUncheckedUpdateWithoutProductoInput = {
    id?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    talleId?: IntFieldUpdateOperationsInput | number
    imgs?: ImgUncheckedUpdateManyWithoutDetalleNestedInput
    precios?: PrecioUncheckedUpdateManyWithoutDetalleNestedInput
  }

  export type DetalleUncheckedUpdateManyWithoutProductoInput = {
    id?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    talleId?: IntFieldUpdateOperationsInput | number
  }

  export type ItemOrdenUpdateWithoutProductoInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    ordenCompra?: OrdenCompraUpdateOneRequiredWithoutItemsNestedInput
  }

  export type ItemOrdenUncheckedUpdateWithoutProductoInput = {
    id?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    ordenCompraId?: IntFieldUpdateOperationsInput | number
  }

  export type ItemOrdenUncheckedUpdateManyWithoutProductoInput = {
    id?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    ordenCompraId?: IntFieldUpdateOperationsInput | number
  }

  export type DetalleCreateManyTalleInput = {
    id?: number
    color: string
    estado: string
    stock: number
    productoId: number
  }

  export type DetalleUpdateWithoutTalleInput = {
    color?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    producto?: ProductoUpdateOneRequiredWithoutDetallesNestedInput
    imgs?: ImgUpdateManyWithoutDetalleNestedInput
    precios?: PrecioUpdateManyWithoutDetalleNestedInput
  }

  export type DetalleUncheckedUpdateWithoutTalleInput = {
    id?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    productoId?: IntFieldUpdateOperationsInput | number
    imgs?: ImgUncheckedUpdateManyWithoutDetalleNestedInput
    precios?: PrecioUncheckedUpdateManyWithoutDetalleNestedInput
  }

  export type DetalleUncheckedUpdateManyWithoutTalleInput = {
    id?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    productoId?: IntFieldUpdateOperationsInput | number
  }

  export type UsuarioDireccionCreateManyUsuarioInput = {
    id?: number
    direccionId: number
  }

  export type OrdenCompraCreateManyUsuarioInput = {
    id?: number
    total: number
    descuento: number
    fechaCompra: string
    direccionEnvioId: number
  }

  export type UsuarioDireccionUpdateWithoutUsuarioInput = {
    direccion?: DireccionUpdateOneRequiredWithoutUsuariosNestedInput
    ordenesEnvio?: OrdenCompraUpdateManyWithoutDireccionEnvioNestedInput
  }

  export type UsuarioDireccionUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    direccionId?: IntFieldUpdateOperationsInput | number
    ordenesEnvio?: OrdenCompraUncheckedUpdateManyWithoutDireccionEnvioNestedInput
  }

  export type UsuarioDireccionUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    direccionId?: IntFieldUpdateOperationsInput | number
  }

  export type OrdenCompraUpdateWithoutUsuarioInput = {
    total?: FloatFieldUpdateOperationsInput | number
    descuento?: FloatFieldUpdateOperationsInput | number
    fechaCompra?: StringFieldUpdateOperationsInput | string
    direccionEnvio?: UsuarioDireccionUpdateOneRequiredWithoutOrdenesEnvioNestedInput
    items?: ItemOrdenUpdateManyWithoutOrdenCompraNestedInput
  }

  export type OrdenCompraUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    descuento?: FloatFieldUpdateOperationsInput | number
    fechaCompra?: StringFieldUpdateOperationsInput | string
    direccionEnvioId?: IntFieldUpdateOperationsInput | number
    items?: ItemOrdenUncheckedUpdateManyWithoutOrdenCompraNestedInput
  }

  export type OrdenCompraUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    descuento?: FloatFieldUpdateOperationsInput | number
    fechaCompra?: StringFieldUpdateOperationsInput | string
    direccionEnvioId?: IntFieldUpdateOperationsInput | number
  }

  export type OrdenCompraCreateManyDireccionEnvioInput = {
    id?: number
    total: number
    descuento: number
    fechaCompra: string
    usuarioId: string
  }

  export type OrdenCompraUpdateWithoutDireccionEnvioInput = {
    total?: FloatFieldUpdateOperationsInput | number
    descuento?: FloatFieldUpdateOperationsInput | number
    fechaCompra?: StringFieldUpdateOperationsInput | string
    usuario?: UsuarioUpdateOneRequiredWithoutOrdenesNestedInput
    items?: ItemOrdenUpdateManyWithoutOrdenCompraNestedInput
  }

  export type OrdenCompraUncheckedUpdateWithoutDireccionEnvioInput = {
    id?: IntFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    descuento?: FloatFieldUpdateOperationsInput | number
    fechaCompra?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    items?: ItemOrdenUncheckedUpdateManyWithoutOrdenCompraNestedInput
  }

  export type OrdenCompraUncheckedUpdateManyWithoutDireccionEnvioInput = {
    id?: IntFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    descuento?: FloatFieldUpdateOperationsInput | number
    fechaCompra?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}