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
import type { CiWorkflowCreateRequestDataRelationshipsMacOsVersion } from './CiWorkflowCreateRequestDataRelationshipsMacOsVersion';
import {
    CiWorkflowCreateRequestDataRelationshipsMacOsVersionFromJSON,
    CiWorkflowCreateRequestDataRelationshipsMacOsVersionFromJSONTyped,
    CiWorkflowCreateRequestDataRelationshipsMacOsVersionToJSON,
} from './CiWorkflowCreateRequestDataRelationshipsMacOsVersion';
import type { CiWorkflowCreateRequestDataRelationshipsProduct } from './CiWorkflowCreateRequestDataRelationshipsProduct';
import {
    CiWorkflowCreateRequestDataRelationshipsProductFromJSON,
    CiWorkflowCreateRequestDataRelationshipsProductFromJSONTyped,
    CiWorkflowCreateRequestDataRelationshipsProductToJSON,
} from './CiWorkflowCreateRequestDataRelationshipsProduct';
import type { CiWorkflowCreateRequestDataRelationshipsRepository } from './CiWorkflowCreateRequestDataRelationshipsRepository';
import {
    CiWorkflowCreateRequestDataRelationshipsRepositoryFromJSON,
    CiWorkflowCreateRequestDataRelationshipsRepositoryFromJSONTyped,
    CiWorkflowCreateRequestDataRelationshipsRepositoryToJSON,
} from './CiWorkflowCreateRequestDataRelationshipsRepository';
import type { CiWorkflowCreateRequestDataRelationshipsXcodeVersion } from './CiWorkflowCreateRequestDataRelationshipsXcodeVersion';
import {
    CiWorkflowCreateRequestDataRelationshipsXcodeVersionFromJSON,
    CiWorkflowCreateRequestDataRelationshipsXcodeVersionFromJSONTyped,
    CiWorkflowCreateRequestDataRelationshipsXcodeVersionToJSON,
} from './CiWorkflowCreateRequestDataRelationshipsXcodeVersion';

/**
 * 
 * @export
 * @interface CiWorkflowCreateRequestDataRelationships
 */
export interface CiWorkflowCreateRequestDataRelationships {
    /**
     * 
     * @type {CiWorkflowCreateRequestDataRelationshipsProduct}
     * @memberof CiWorkflowCreateRequestDataRelationships
     */
    product: CiWorkflowCreateRequestDataRelationshipsProduct;
    /**
     * 
     * @type {CiWorkflowCreateRequestDataRelationshipsRepository}
     * @memberof CiWorkflowCreateRequestDataRelationships
     */
    repository: CiWorkflowCreateRequestDataRelationshipsRepository;
    /**
     * 
     * @type {CiWorkflowCreateRequestDataRelationshipsXcodeVersion}
     * @memberof CiWorkflowCreateRequestDataRelationships
     */
    xcodeVersion: CiWorkflowCreateRequestDataRelationshipsXcodeVersion;
    /**
     * 
     * @type {CiWorkflowCreateRequestDataRelationshipsMacOsVersion}
     * @memberof CiWorkflowCreateRequestDataRelationships
     */
    macOsVersion: CiWorkflowCreateRequestDataRelationshipsMacOsVersion;
}

/**
 * Check if a given object implements the CiWorkflowCreateRequestDataRelationships interface.
 */
export function instanceOfCiWorkflowCreateRequestDataRelationships(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "product" in value;
    isInstance = isInstance && "repository" in value;
    isInstance = isInstance && "xcodeVersion" in value;
    isInstance = isInstance && "macOsVersion" in value;

    return isInstance;
}

export function CiWorkflowCreateRequestDataRelationshipsFromJSON(json: any): CiWorkflowCreateRequestDataRelationships {
    return CiWorkflowCreateRequestDataRelationshipsFromJSONTyped(json, false);
}

export function CiWorkflowCreateRequestDataRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiWorkflowCreateRequestDataRelationships {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'product': CiWorkflowCreateRequestDataRelationshipsProductFromJSON(json['product']),
        'repository': CiWorkflowCreateRequestDataRelationshipsRepositoryFromJSON(json['repository']),
        'xcodeVersion': CiWorkflowCreateRequestDataRelationshipsXcodeVersionFromJSON(json['xcodeVersion']),
        'macOsVersion': CiWorkflowCreateRequestDataRelationshipsMacOsVersionFromJSON(json['macOsVersion']),
    };
}

export function CiWorkflowCreateRequestDataRelationshipsToJSON(value?: CiWorkflowCreateRequestDataRelationships | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'product': CiWorkflowCreateRequestDataRelationshipsProductToJSON(value.product),
        'repository': CiWorkflowCreateRequestDataRelationshipsRepositoryToJSON(value.repository),
        'xcodeVersion': CiWorkflowCreateRequestDataRelationshipsXcodeVersionToJSON(value.xcodeVersion),
        'macOsVersion': CiWorkflowCreateRequestDataRelationshipsMacOsVersionToJSON(value.macOsVersion),
    };
}

