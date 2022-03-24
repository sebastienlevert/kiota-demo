import {Knowledgebaserecord} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createKnowledgebaserecordFromDiscriminatorValue(parseNode: ParseNode | undefined) : Knowledgebaserecord {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Knowledgebaserecord();
}
