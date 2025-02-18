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
import type { CiTestDestination } from './CiTestDestination';
import {
    CiTestDestinationFromJSON,
    CiTestDestinationFromJSONTyped,
    CiTestDestinationToJSON,
} from './CiTestDestination';

/**
 * 
 * @export
 * @interface CiActionTestConfiguration
 */
export interface CiActionTestConfiguration {
    /**
     * 
     * @type {string}
     * @memberof CiActionTestConfiguration
     */
    kind?: CiActionTestConfigurationKindEnum;
    /**
     * 
     * @type {string}
     * @memberof CiActionTestConfiguration
     */
    testPlanName?: string;
    /**
     * 
     * @type {Array<CiTestDestination>}
     * @memberof CiActionTestConfiguration
     */
    testDestinations?: Array<CiTestDestination>;
}


/**
 * @export
 */
export const CiActionTestConfigurationKindEnum = {
    UseSchemeSettings: 'USE_SCHEME_SETTINGS',
    SpecificTestPlans: 'SPECIFIC_TEST_PLANS'
} as const;
export type CiActionTestConfigurationKindEnum = typeof CiActionTestConfigurationKindEnum[keyof typeof CiActionTestConfigurationKindEnum];


/**
 * Check if a given object implements the CiActionTestConfiguration interface.
 */
export function instanceOfCiActionTestConfiguration(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CiActionTestConfigurationFromJSON(json: any): CiActionTestConfiguration {
    return CiActionTestConfigurationFromJSONTyped(json, false);
}

export function CiActionTestConfigurationFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiActionTestConfiguration {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'testPlanName': !exists(json, 'testPlanName') ? undefined : json['testPlanName'],
        'testDestinations': !exists(json, 'testDestinations') ? undefined : ((json['testDestinations'] as Array<any>).map(CiTestDestinationFromJSON)),
    };
}

export function CiActionTestConfigurationToJSON(value?: CiActionTestConfiguration | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'kind': value.kind,
        'testPlanName': value.testPlanName,
        'testDestinations': value.testDestinations === undefined ? undefined : ((value.testDestinations as Array<any>).map(CiTestDestinationToJSON)),
    };
}

