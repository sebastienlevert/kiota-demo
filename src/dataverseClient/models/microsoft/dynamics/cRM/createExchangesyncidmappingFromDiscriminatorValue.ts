import {Exchangesyncidmapping} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createExchangesyncidmappingFromDiscriminatorValue(parseNode: ParseNode | undefined) : Exchangesyncidmapping {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Exchangesyncidmapping();
}
