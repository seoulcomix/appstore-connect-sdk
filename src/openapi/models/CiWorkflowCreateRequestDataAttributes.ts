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
import type { CiAction } from './CiAction';
import {
    CiActionFromJSON,
    CiActionFromJSONTyped,
    CiActionToJSON,
} from './CiAction';
import type { CiBranchStartCondition } from './CiBranchStartCondition';
import {
    CiBranchStartConditionFromJSON,
    CiBranchStartConditionFromJSONTyped,
    CiBranchStartConditionToJSON,
} from './CiBranchStartCondition';
import type { CiManualBranchStartCondition } from './CiManualBranchStartCondition';
import {
    CiManualBranchStartConditionFromJSON,
    CiManualBranchStartConditionFromJSONTyped,
    CiManualBranchStartConditionToJSON,
} from './CiManualBranchStartCondition';
import type { CiManualPullRequestStartCondition } from './CiManualPullRequestStartCondition';
import {
    CiManualPullRequestStartConditionFromJSON,
    CiManualPullRequestStartConditionFromJSONTyped,
    CiManualPullRequestStartConditionToJSON,
} from './CiManualPullRequestStartCondition';
import type { CiManualTagStartCondition } from './CiManualTagStartCondition';
import {
    CiManualTagStartConditionFromJSON,
    CiManualTagStartConditionFromJSONTyped,
    CiManualTagStartConditionToJSON,
} from './CiManualTagStartCondition';
import type { CiPullRequestStartCondition } from './CiPullRequestStartCondition';
import {
    CiPullRequestStartConditionFromJSON,
    CiPullRequestStartConditionFromJSONTyped,
    CiPullRequestStartConditionToJSON,
} from './CiPullRequestStartCondition';
import type { CiScheduledStartCondition } from './CiScheduledStartCondition';
import {
    CiScheduledStartConditionFromJSON,
    CiScheduledStartConditionFromJSONTyped,
    CiScheduledStartConditionToJSON,
} from './CiScheduledStartCondition';
import type { CiTagStartCondition } from './CiTagStartCondition';
import {
    CiTagStartConditionFromJSON,
    CiTagStartConditionFromJSONTyped,
    CiTagStartConditionToJSON,
} from './CiTagStartCondition';

/**
 * 
 * @export
 * @interface CiWorkflowCreateRequestDataAttributes
 */
export interface CiWorkflowCreateRequestDataAttributes {
    /**
     * 
     * @type {string}
     * @memberof CiWorkflowCreateRequestDataAttributes
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof CiWorkflowCreateRequestDataAttributes
     */
    description: string;
    /**
     * 
     * @type {CiBranchStartCondition}
     * @memberof CiWorkflowCreateRequestDataAttributes
     */
    branchStartCondition?: CiBranchStartCondition;
    /**
     * 
     * @type {CiTagStartCondition}
     * @memberof CiWorkflowCreateRequestDataAttributes
     */
    tagStartCondition?: CiTagStartCondition;
    /**
     * 
     * @type {CiPullRequestStartCondition}
     * @memberof CiWorkflowCreateRequestDataAttributes
     */
    pullRequestStartCondition?: CiPullRequestStartCondition;
    /**
     * 
     * @type {CiScheduledStartCondition}
     * @memberof CiWorkflowCreateRequestDataAttributes
     */
    scheduledStartCondition?: CiScheduledStartCondition;
    /**
     * 
     * @type {CiManualBranchStartCondition}
     * @memberof CiWorkflowCreateRequestDataAttributes
     */
    manualBranchStartCondition?: CiManualBranchStartCondition;
    /**
     * 
     * @type {CiManualTagStartCondition}
     * @memberof CiWorkflowCreateRequestDataAttributes
     */
    manualTagStartCondition?: CiManualTagStartCondition;
    /**
     * 
     * @type {CiManualPullRequestStartCondition}
     * @memberof CiWorkflowCreateRequestDataAttributes
     */
    manualPullRequestStartCondition?: CiManualPullRequestStartCondition;
    /**
     * 
     * @type {Array<CiAction>}
     * @memberof CiWorkflowCreateRequestDataAttributes
     */
    actions: Array<CiAction>;
    /**
     * 
     * @type {boolean}
     * @memberof CiWorkflowCreateRequestDataAttributes
     */
    isEnabled: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CiWorkflowCreateRequestDataAttributes
     */
    isLockedForEditing?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CiWorkflowCreateRequestDataAttributes
     */
    clean: boolean;
    /**
     * 
     * @type {string}
     * @memberof CiWorkflowCreateRequestDataAttributes
     */
    containerFilePath: string;
}

/**
 * Check if a given object implements the CiWorkflowCreateRequestDataAttributes interface.
 */
export function instanceOfCiWorkflowCreateRequestDataAttributes(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "actions" in value;
    isInstance = isInstance && "isEnabled" in value;
    isInstance = isInstance && "clean" in value;
    isInstance = isInstance && "containerFilePath" in value;

    return isInstance;
}

export function CiWorkflowCreateRequestDataAttributesFromJSON(json: any): CiWorkflowCreateRequestDataAttributes {
    return CiWorkflowCreateRequestDataAttributesFromJSONTyped(json, false);
}

export function CiWorkflowCreateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiWorkflowCreateRequestDataAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'description': json['description'],
        'branchStartCondition': !exists(json, 'branchStartCondition') ? undefined : CiBranchStartConditionFromJSON(json['branchStartCondition']),
        'tagStartCondition': !exists(json, 'tagStartCondition') ? undefined : CiTagStartConditionFromJSON(json['tagStartCondition']),
        'pullRequestStartCondition': !exists(json, 'pullRequestStartCondition') ? undefined : CiPullRequestStartConditionFromJSON(json['pullRequestStartCondition']),
        'scheduledStartCondition': !exists(json, 'scheduledStartCondition') ? undefined : CiScheduledStartConditionFromJSON(json['scheduledStartCondition']),
        'manualBranchStartCondition': !exists(json, 'manualBranchStartCondition') ? undefined : CiManualBranchStartConditionFromJSON(json['manualBranchStartCondition']),
        'manualTagStartCondition': !exists(json, 'manualTagStartCondition') ? undefined : CiManualTagStartConditionFromJSON(json['manualTagStartCondition']),
        'manualPullRequestStartCondition': !exists(json, 'manualPullRequestStartCondition') ? undefined : CiManualPullRequestStartConditionFromJSON(json['manualPullRequestStartCondition']),
        'actions': ((json['actions'] as Array<any>).map(CiActionFromJSON)),
        'isEnabled': json['isEnabled'],
        'isLockedForEditing': !exists(json, 'isLockedForEditing') ? undefined : json['isLockedForEditing'],
        'clean': json['clean'],
        'containerFilePath': json['containerFilePath'],
    };
}

export function CiWorkflowCreateRequestDataAttributesToJSON(value?: CiWorkflowCreateRequestDataAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'description': value.description,
        'branchStartCondition': CiBranchStartConditionToJSON(value.branchStartCondition),
        'tagStartCondition': CiTagStartConditionToJSON(value.tagStartCondition),
        'pullRequestStartCondition': CiPullRequestStartConditionToJSON(value.pullRequestStartCondition),
        'scheduledStartCondition': CiScheduledStartConditionToJSON(value.scheduledStartCondition),
        'manualBranchStartCondition': CiManualBranchStartConditionToJSON(value.manualBranchStartCondition),
        'manualTagStartCondition': CiManualTagStartConditionToJSON(value.manualTagStartCondition),
        'manualPullRequestStartCondition': CiManualPullRequestStartConditionToJSON(value.manualPullRequestStartCondition),
        'actions': ((value.actions as Array<any>).map(CiActionToJSON)),
        'isEnabled': value.isEnabled,
        'isLockedForEditing': value.isLockedForEditing,
        'clean': value.clean,
        'containerFilePath': value.containerFilePath,
    };
}

