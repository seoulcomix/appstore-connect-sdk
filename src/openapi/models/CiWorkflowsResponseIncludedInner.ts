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

import {
    CiMacOsVersion,
    instanceOfCiMacOsVersion,
    CiMacOsVersionFromJSON,
    CiMacOsVersionFromJSONTyped,
    CiMacOsVersionToJSON,
} from './CiMacOsVersion';
import {
    CiProduct,
    instanceOfCiProduct,
    CiProductFromJSON,
    CiProductFromJSONTyped,
    CiProductToJSON,
} from './CiProduct';
import {
    CiXcodeVersion,
    instanceOfCiXcodeVersion,
    CiXcodeVersionFromJSON,
    CiXcodeVersionFromJSONTyped,
    CiXcodeVersionToJSON,
} from './CiXcodeVersion';
import {
    ScmRepository,
    instanceOfScmRepository,
    ScmRepositoryFromJSON,
    ScmRepositoryFromJSONTyped,
    ScmRepositoryToJSON,
} from './ScmRepository';

/**
 * @type CiWorkflowsResponseIncludedInner
 * 
 * @export
 */
export type CiWorkflowsResponseIncludedInner = CiMacOsVersion | CiProduct | CiXcodeVersion | ScmRepository;

export function CiWorkflowsResponseIncludedInnerFromJSON(json: any): CiWorkflowsResponseIncludedInner {
    return CiWorkflowsResponseIncludedInnerFromJSONTyped(json, false);
}

export function CiWorkflowsResponseIncludedInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiWorkflowsResponseIncludedInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return { ...CiMacOsVersionFromJSONTyped(json, true), ...CiProductFromJSONTyped(json, true), ...CiXcodeVersionFromJSONTyped(json, true), ...ScmRepositoryFromJSONTyped(json, true) };
}

export function CiWorkflowsResponseIncludedInnerToJSON(value?: CiWorkflowsResponseIncludedInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (instanceOfCiMacOsVersion(value)) {
        return CiMacOsVersionToJSON(value as CiMacOsVersion);
    }
    if (instanceOfCiProduct(value)) {
        return CiProductToJSON(value as CiProduct);
    }
    if (instanceOfCiXcodeVersion(value)) {
        return CiXcodeVersionToJSON(value as CiXcodeVersion);
    }
    if (instanceOfScmRepository(value)) {
        return ScmRepositoryToJSON(value as ScmRepository);
    }

    return {};
}

