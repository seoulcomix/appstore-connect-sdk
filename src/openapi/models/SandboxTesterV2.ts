/* tslint:disable */
/* eslint-disable */
/**
 * App Store Connect API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 3.8.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
} from './ResourceLinks';
import type { SandboxTesterV2Attributes } from './SandboxTesterV2Attributes';
import {
    SandboxTesterV2AttributesFromJSON,
    SandboxTesterV2AttributesFromJSONTyped,
    SandboxTesterV2AttributesToJSON,
} from './SandboxTesterV2Attributes';

/**
 * 
 * @export
 * @interface SandboxTesterV2
 */
export interface SandboxTesterV2 {
    /**
     * 
     * @type {string}
     * @memberof SandboxTesterV2
     */
    type: SandboxTesterV2TypeEnum;
    /**
     * 
     * @type {string}
     * @memberof SandboxTesterV2
     */
    id: string;
    /**
     * 
     * @type {SandboxTesterV2Attributes}
     * @memberof SandboxTesterV2
     */
    attributes?: SandboxTesterV2Attributes;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof SandboxTesterV2
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const SandboxTesterV2TypeEnum = {
    SandboxTesters: 'sandboxTesters'
} as const;
export type SandboxTesterV2TypeEnum = typeof SandboxTesterV2TypeEnum[keyof typeof SandboxTesterV2TypeEnum];


/**
 * Check if a given object implements the SandboxTesterV2 interface.
 */
export function instanceOfSandboxTesterV2(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function SandboxTesterV2FromJSON(json: any): SandboxTesterV2 {
    return SandboxTesterV2FromJSONTyped(json, false);
}

export function SandboxTesterV2FromJSONTyped(json: any, ignoreDiscriminator: boolean): SandboxTesterV2 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : SandboxTesterV2AttributesFromJSON(json['attributes']),
        'links': !exists(json, 'links') ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function SandboxTesterV2ToJSON(value?: SandboxTesterV2 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': SandboxTesterV2AttributesToJSON(value.attributes),
        'links': ResourceLinksToJSON(value.links),
    };
}

