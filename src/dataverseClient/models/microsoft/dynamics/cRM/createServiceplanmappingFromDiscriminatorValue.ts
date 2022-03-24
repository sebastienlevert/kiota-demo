import {Serviceplanmapping} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createServiceplanmappingFromDiscriminatorValue(parseNode: ParseNode | undefined) : Serviceplanmapping {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Serviceplanmapping();
}
