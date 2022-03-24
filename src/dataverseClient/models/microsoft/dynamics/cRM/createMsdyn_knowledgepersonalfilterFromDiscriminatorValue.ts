import {Msdyn_knowledgepersonalfilter} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_knowledgepersonalfilterFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_knowledgepersonalfilter {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_knowledgepersonalfilter();
}
