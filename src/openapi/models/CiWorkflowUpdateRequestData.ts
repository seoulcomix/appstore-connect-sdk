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
import type { CiWorkflowUpdateRequestDataAttributes } from './CiWorkflowUpdateRequestDataAttributes';
import {
    CiWorkflowUpdateRequestDataAttributesFromJSON,
    CiWorkflowUpdateRequestDataAttributesFromJSONTyped,
    CiWorkflowUpdateRequestDataAttributesToJSON,
} from './CiWorkflowUpdateRequestDataAttributes';
import type { CiWorkflowUpdateRequestDataRelationships } from './CiWorkflowUpdateRequestDataRelationships';
import {
    CiWorkflowUpdateRequestDataRelationshipsFromJSON,
    CiWorkflowUpdateRequestDataRelationshipsFromJSONTyped,
    CiWorkflowUpdateRequestDataRelationshipsToJSON,
} from './CiWorkflowUpdateRequestDataRelationships';

/**
 * 
 * @export
 * @interface CiWorkflowUpdateRequestData
 */
export interface CiWorkflowUpdateRequestData {
    /**
     * 
     * @type {string}
     * @memberof CiWorkflowUpdateRequestData
     */
    type: CiWorkflowUpdateRequestDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof CiWorkflowUpdateRequestData
     */
    id: string;
    /**
     * 
     * @type {CiWorkflowUpdateRequestDataAttributes}
     * @memberof CiWorkflowUpdateRequestData
     */
    attributes?: CiWorkflowUpdateRequestDataAttributes;
    /**
     * 
     * @type {CiWorkflowUpdateRequestDataRelationships}
     * @memberof CiWorkflowUpdateRequestData
     */
    relationships?: CiWorkflowUpdateRequestDataRelationships;
}


/**
 * @export
 */
export const CiWorkflowUpdateRequestDataTypeEnum = {
    CiWorkflows: 'ciWorkflows'
} as const;
export type CiWorkflowUpdateRequestDataTypeEnum = typeof CiWorkflowUpdateRequestDataTypeEnum[keyof typeof CiWorkflowUpdateRequestDataTypeEnum];


/**
 * Check if a given object implements the CiWorkflowUpdateRequestData interface.
 */
export function instanceOfCiWorkflowUpdateRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function CiWorkflowUpdateRequestDataFromJSON(json: any): CiWorkflowUpdateRequestData {
    return CiWorkflowUpdateRequestDataFromJSONTyped(json, false);
}

export function CiWorkflowUpdateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiWorkflowUpdateRequestData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : CiWorkflowUpdateRequestDataAttributesFromJSON(json['attributes']),
        'relationships': !exists(json, 'relationships') ? undefined : CiWorkflowUpdateRequestDataRelationshipsFromJSON(json['relationships']),
    };
}

export function CiWorkflowUpdateRequestDataToJSON(value?: CiWorkflowUpdateRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': CiWorkflowUpdateRequestDataAttributesToJSON(value.attributes),
        'relationships': CiWorkflowUpdateRequestDataRelationshipsToJSON(value.relationships),
    };
}

