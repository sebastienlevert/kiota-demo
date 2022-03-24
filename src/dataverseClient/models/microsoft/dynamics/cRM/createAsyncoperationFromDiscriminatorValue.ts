import {Asyncoperation} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAsyncoperationFromDiscriminatorValue(parseNode: ParseNode | undefined) : Asyncoperation {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Asyncoperation();
}
