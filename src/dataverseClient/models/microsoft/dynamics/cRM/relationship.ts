import {createRelationshipattributeFromDiscriminatorValue} from './createRelationshipattributeFromDiscriminatorValue';
import {Crmbaseentity, Relationshipattribute} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Relationship extends Crmbaseentity implements Parsable {
    private _componentstate?: number | undefined;
    private _entitykeyid?: string | undefined;
    private _isrelationshipattributedenormalized?: boolean | undefined;
    private _name?: string | undefined;
    private _overwritetime?: Date | undefined;
    private _relationship_relationshipattribute?: Relationshipattribute[] | undefined;
    private _relationshipid?: string | undefined;
    private _solutionid?: string | undefined;
    private _versionnumber?: number | undefined;
    /**
     * Gets the componentstate property value. 
     * @returns a integer
     */
    public get componentstate() {
        return this._componentstate;
    };
    /**
     * Sets the componentstate property value. 
     * @param value Value to set for the componentstate property.
     */
    public set componentstate(value: number | undefined) {
        this._componentstate = value;
    };
    /**
     * Instantiates a new relationship and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the entitykeyid property value. 
     * @returns a string
     */
    public get entitykeyid() {
        return this._entitykeyid;
    };
    /**
     * Sets the entitykeyid property value. 
     * @param value Value to set for the entitykeyid property.
     */
    public set entitykeyid(value: string | undefined) {
        this._entitykeyid = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "componentstate": (o, n) => { (o as unknown as Relationship).componentstate = n.getNumberValue(); },
            "entitykeyid": (o, n) => { (o as unknown as Relationship).entitykeyid = n.getStringValue(); },
            "isrelationshipattributedenormalized": (o, n) => { (o as unknown as Relationship).isrelationshipattributedenormalized = n.getBooleanValue(); },
            "name": (o, n) => { (o as unknown as Relationship).name = n.getStringValue(); },
            "overwritetime": (o, n) => { (o as unknown as Relationship).overwritetime = n.getDateValue(); },
            "relationship_relationshipattribute": (o, n) => { (o as unknown as Relationship).relationship_relationshipattribute = n.getCollectionOfObjectValues<Relationshipattribute>(createRelationshipattributeFromDiscriminatorValue); },
            "relationshipid": (o, n) => { (o as unknown as Relationship).relationshipid = n.getStringValue(); },
            "solutionid": (o, n) => { (o as unknown as Relationship).solutionid = n.getStringValue(); },
            "versionnumber": (o, n) => { (o as unknown as Relationship).versionnumber = n.getNumberValue(); },
        };
    };
    /**
     * Gets the isrelationshipattributedenormalized property value. 
     * @returns a boolean
     */
    public get isrelationshipattributedenormalized() {
        return this._isrelationshipattributedenormalized;
    };
    /**
     * Sets the isrelationshipattributedenormalized property value. 
     * @param value Value to set for the isrelationshipattributedenormalized property.
     */
    public set isrelationshipattributedenormalized(value: boolean | undefined) {
        this._isrelationshipattributedenormalized = value;
    };
    /**
     * Gets the name property value. 
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. 
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
    };
    /**
     * Gets the overwritetime property value. 
     * @returns a Date
     */
    public get overwritetime() {
        return this._overwritetime;
    };
    /**
     * Sets the overwritetime property value. 
     * @param value Value to set for the overwritetime property.
     */
    public set overwritetime(value: Date | undefined) {
        this._overwritetime = value;
    };
    /**
     * Gets the relationship_relationshipattribute property value. 
     * @returns a relationshipattribute
     */
    public get relationship_relationshipattribute() {
        return this._relationship_relationshipattribute;
    };
    /**
     * Sets the relationship_relationshipattribute property value. 
     * @param value Value to set for the relationship_relationshipattribute property.
     */
    public set relationship_relationshipattribute(value: Relationshipattribute[] | undefined) {
        this._relationship_relationshipattribute = value;
    };
    /**
     * Gets the relationshipid property value. 
     * @returns a string
     */
    public get relationshipid() {
        return this._relationshipid;
    };
    /**
     * Sets the relationshipid property value. 
     * @param value Value to set for the relationshipid property.
     */
    public set relationshipid(value: string | undefined) {
        this._relationshipid = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeNumberValue("componentstate", this.componentstate);
        writer.writeStringValue("entitykeyid", this.entitykeyid);
        writer.writeBooleanValue("isrelationshipattributedenormalized", this.isrelationshipattributedenormalized);
        writer.writeStringValue("name", this.name);
        writer.writeDateValue("overwritetime", this.overwritetime);
        writer.writeCollectionOfObjectValues<Relationshipattribute>("relationship_relationshipattribute", this.relationship_relationshipattribute);
        writer.writeStringValue("relationshipid", this.relationshipid);
        writer.writeStringValue("solutionid", this.solutionid);
        writer.writeNumberValue("versionnumber", this.versionnumber);
    };
    /**
     * Gets the solutionid property value. 
     * @returns a string
     */
    public get solutionid() {
        return this._solutionid;
    };
    /**
     * Sets the solutionid property value. 
     * @param value Value to set for the solutionid property.
     */
    public set solutionid(value: string | undefined) {
        this._solutionid = value;
    };
    /**
     * Gets the versionnumber property value. 
     * @returns a int64
     */
    public get versionnumber() {
        return this._versionnumber;
    };
    /**
     * Sets the versionnumber property value. 
     * @param value Value to set for the versionnumber property.
     */
    public set versionnumber(value: number | undefined) {
        this._versionnumber = value;
    };
}
