import {createRelationshipattributeFromDiscriminatorValue} from './createRelationshipattributeFromDiscriminatorValue';
import {createSolutioncomponentattributeconfigurationFromDiscriminatorValue} from './createSolutioncomponentattributeconfigurationFromDiscriminatorValue';
import {Crmbaseentity, Relationshipattribute, Solutioncomponentattributeconfiguration} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Attribute extends Crmbaseentity implements Parsable {
    private _attribute_solutioncomponentattrconfig?: Solutioncomponentattributeconfiguration[] | undefined;
    private _attributeid?: string | undefined;
    private _attributeof?: string | undefined;
    private _attributetypeid?: string | undefined;
    private _componentstate?: number | undefined;
    private _externalname?: string | undefined;
    private _logicalname?: string | undefined;
    private _managedpropertylogicalname?: string | undefined;
    private _managedpropertyparentattributename?: string | undefined;
    private _name?: string | undefined;
    private _overwritetime?: Date | undefined;
    private _physicalname?: string | undefined;
    private _referencedattribute_relationshipattribute?: Relationshipattribute[] | undefined;
    private _referencingdattribute_relationshipattribute?: Relationshipattribute[] | undefined;
    private _solutionid?: string | undefined;
    private _tablecolumnname?: string | undefined;
    private _validforreadapi?: boolean | undefined;
    private _versionnumber?: number | undefined;
    /**
     * Gets the attribute_solutioncomponentattrconfig property value. 
     * @returns a solutioncomponentattributeconfiguration
     */
    public get attribute_solutioncomponentattrconfig() {
        return this._attribute_solutioncomponentattrconfig;
    };
    /**
     * Sets the attribute_solutioncomponentattrconfig property value. 
     * @param value Value to set for the attribute_solutioncomponentattrconfig property.
     */
    public set attribute_solutioncomponentattrconfig(value: Solutioncomponentattributeconfiguration[] | undefined) {
        this._attribute_solutioncomponentattrconfig = value;
    };
    /**
     * Gets the attributeid property value. 
     * @returns a string
     */
    public get attributeid() {
        return this._attributeid;
    };
    /**
     * Sets the attributeid property value. 
     * @param value Value to set for the attributeid property.
     */
    public set attributeid(value: string | undefined) {
        this._attributeid = value;
    };
    /**
     * Gets the attributeof property value. 
     * @returns a string
     */
    public get attributeof() {
        return this._attributeof;
    };
    /**
     * Sets the attributeof property value. 
     * @param value Value to set for the attributeof property.
     */
    public set attributeof(value: string | undefined) {
        this._attributeof = value;
    };
    /**
     * Gets the attributetypeid property value. 
     * @returns a string
     */
    public get attributetypeid() {
        return this._attributetypeid;
    };
    /**
     * Sets the attributetypeid property value. 
     * @param value Value to set for the attributetypeid property.
     */
    public set attributetypeid(value: string | undefined) {
        this._attributetypeid = value;
    };
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
     * Instantiates a new attribute and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the externalname property value. 
     * @returns a string
     */
    public get externalname() {
        return this._externalname;
    };
    /**
     * Sets the externalname property value. 
     * @param value Value to set for the externalname property.
     */
    public set externalname(value: string | undefined) {
        this._externalname = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "attribute_solutioncomponentattrconfig": (o, n) => { (o as unknown as Attribute).attribute_solutioncomponentattrconfig = n.getCollectionOfObjectValues<Solutioncomponentattributeconfiguration>(createSolutioncomponentattributeconfigurationFromDiscriminatorValue); },
            "attributeid": (o, n) => { (o as unknown as Attribute).attributeid = n.getStringValue(); },
            "attributeof": (o, n) => { (o as unknown as Attribute).attributeof = n.getStringValue(); },
            "attributetypeid": (o, n) => { (o as unknown as Attribute).attributetypeid = n.getStringValue(); },
            "componentstate": (o, n) => { (o as unknown as Attribute).componentstate = n.getNumberValue(); },
            "externalname": (o, n) => { (o as unknown as Attribute).externalname = n.getStringValue(); },
            "logicalname": (o, n) => { (o as unknown as Attribute).logicalname = n.getStringValue(); },
            "managedpropertylogicalname": (o, n) => { (o as unknown as Attribute).managedpropertylogicalname = n.getStringValue(); },
            "managedpropertyparentattributename": (o, n) => { (o as unknown as Attribute).managedpropertyparentattributename = n.getStringValue(); },
            "name": (o, n) => { (o as unknown as Attribute).name = n.getStringValue(); },
            "overwritetime": (o, n) => { (o as unknown as Attribute).overwritetime = n.getDateValue(); },
            "physicalname": (o, n) => { (o as unknown as Attribute).physicalname = n.getStringValue(); },
            "referencedattribute_relationshipattribute": (o, n) => { (o as unknown as Attribute).referencedattribute_relationshipattribute = n.getCollectionOfObjectValues<Relationshipattribute>(createRelationshipattributeFromDiscriminatorValue); },
            "referencingdattribute_relationshipattribute": (o, n) => { (o as unknown as Attribute).referencingdattribute_relationshipattribute = n.getCollectionOfObjectValues<Relationshipattribute>(createRelationshipattributeFromDiscriminatorValue); },
            "solutionid": (o, n) => { (o as unknown as Attribute).solutionid = n.getStringValue(); },
            "tablecolumnname": (o, n) => { (o as unknown as Attribute).tablecolumnname = n.getStringValue(); },
            "validforreadapi": (o, n) => { (o as unknown as Attribute).validforreadapi = n.getBooleanValue(); },
            "versionnumber": (o, n) => { (o as unknown as Attribute).versionnumber = n.getNumberValue(); },
        };
    };
    /**
     * Gets the logicalname property value. 
     * @returns a string
     */
    public get logicalname() {
        return this._logicalname;
    };
    /**
     * Sets the logicalname property value. 
     * @param value Value to set for the logicalname property.
     */
    public set logicalname(value: string | undefined) {
        this._logicalname = value;
    };
    /**
     * Gets the managedpropertylogicalname property value. 
     * @returns a string
     */
    public get managedpropertylogicalname() {
        return this._managedpropertylogicalname;
    };
    /**
     * Sets the managedpropertylogicalname property value. 
     * @param value Value to set for the managedpropertylogicalname property.
     */
    public set managedpropertylogicalname(value: string | undefined) {
        this._managedpropertylogicalname = value;
    };
    /**
     * Gets the managedpropertyparentattributename property value. 
     * @returns a string
     */
    public get managedpropertyparentattributename() {
        return this._managedpropertyparentattributename;
    };
    /**
     * Sets the managedpropertyparentattributename property value. 
     * @param value Value to set for the managedpropertyparentattributename property.
     */
    public set managedpropertyparentattributename(value: string | undefined) {
        this._managedpropertyparentattributename = value;
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
     * Gets the physicalname property value. 
     * @returns a string
     */
    public get physicalname() {
        return this._physicalname;
    };
    /**
     * Sets the physicalname property value. 
     * @param value Value to set for the physicalname property.
     */
    public set physicalname(value: string | undefined) {
        this._physicalname = value;
    };
    /**
     * Gets the referencedattribute_relationshipattribute property value. 
     * @returns a relationshipattribute
     */
    public get referencedattribute_relationshipattribute() {
        return this._referencedattribute_relationshipattribute;
    };
    /**
     * Sets the referencedattribute_relationshipattribute property value. 
     * @param value Value to set for the referencedattribute_relationshipattribute property.
     */
    public set referencedattribute_relationshipattribute(value: Relationshipattribute[] | undefined) {
        this._referencedattribute_relationshipattribute = value;
    };
    /**
     * Gets the referencingdattribute_relationshipattribute property value. 
     * @returns a relationshipattribute
     */
    public get referencingdattribute_relationshipattribute() {
        return this._referencingdattribute_relationshipattribute;
    };
    /**
     * Sets the referencingdattribute_relationshipattribute property value. 
     * @param value Value to set for the referencingdattribute_relationshipattribute property.
     */
    public set referencingdattribute_relationshipattribute(value: Relationshipattribute[] | undefined) {
        this._referencingdattribute_relationshipattribute = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<Solutioncomponentattributeconfiguration>("attribute_solutioncomponentattrconfig", this.attribute_solutioncomponentattrconfig);
        writer.writeStringValue("attributeid", this.attributeid);
        writer.writeStringValue("attributeof", this.attributeof);
        writer.writeStringValue("attributetypeid", this.attributetypeid);
        writer.writeNumberValue("componentstate", this.componentstate);
        writer.writeStringValue("externalname", this.externalname);
        writer.writeStringValue("logicalname", this.logicalname);
        writer.writeStringValue("managedpropertylogicalname", this.managedpropertylogicalname);
        writer.writeStringValue("managedpropertyparentattributename", this.managedpropertyparentattributename);
        writer.writeStringValue("name", this.name);
        writer.writeDateValue("overwritetime", this.overwritetime);
        writer.writeStringValue("physicalname", this.physicalname);
        writer.writeCollectionOfObjectValues<Relationshipattribute>("referencedattribute_relationshipattribute", this.referencedattribute_relationshipattribute);
        writer.writeCollectionOfObjectValues<Relationshipattribute>("referencingdattribute_relationshipattribute", this.referencingdattribute_relationshipattribute);
        writer.writeStringValue("solutionid", this.solutionid);
        writer.writeStringValue("tablecolumnname", this.tablecolumnname);
        writer.writeBooleanValue("validforreadapi", this.validforreadapi);
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
     * Gets the tablecolumnname property value. 
     * @returns a string
     */
    public get tablecolumnname() {
        return this._tablecolumnname;
    };
    /**
     * Sets the tablecolumnname property value. 
     * @param value Value to set for the tablecolumnname property.
     */
    public set tablecolumnname(value: string | undefined) {
        this._tablecolumnname = value;
    };
    /**
     * Gets the validforreadapi property value. 
     * @returns a boolean
     */
    public get validforreadapi() {
        return this._validforreadapi;
    };
    /**
     * Sets the validforreadapi property value. 
     * @param value Value to set for the validforreadapi property.
     */
    public set validforreadapi(value: boolean | undefined) {
        this._validforreadapi = value;
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
