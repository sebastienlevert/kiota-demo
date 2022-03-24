import {Msdyn_requirementorganizationunit} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_requirementorganizationunitFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_requirementorganizationunit {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_requirementorganizationunit();
}
