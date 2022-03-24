import {Msdyn_teamschatsuggestion} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_teamschatsuggestionFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_teamschatsuggestion {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_teamschatsuggestion();
}
