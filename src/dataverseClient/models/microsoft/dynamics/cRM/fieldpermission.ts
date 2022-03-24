import {createFieldsecurityprofileFromDiscriminatorValue} from './createFieldsecurityprofileFromDiscriminatorValue';
import {createSolutionFromDiscriminatorValue} from './createSolutionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {Crmbaseentity, Fieldsecurityprofile, Solution, Syncerror} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Fieldpermission extends Crmbaseentity implements Parsable {
    private __fieldsecurityprofileid_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private _attributelogicalname?: string | undefined;
    private _cancreate?: number | undefined;
    private _canread?: number | undefined;
    private _canupdate?: number | undefined;
    private _componentstate?: number | undefined;
    private _entityname?: string | undefined;
    private _fieldPermission_SyncErrors?: Syncerror[] | undefined;
    private _fieldpermissionid?: string | undefined;
    private _fieldpermissionidunique?: string | undefined;
    private _fieldsecurityprofileid?: Fieldsecurityprofile | undefined;
    private _ismanaged?: boolean | undefined;
    private _overwritetime?: Date | undefined;
    private _solution_fieldpermission?: Solution | undefined;
    private _solutionid?: string | undefined;
    private _versionnumber?: number | undefined;
    /**
     * Gets the _fieldsecurityprofileid_value property value. 
     * @returns a string
     */
    public get _fieldsecurityprofileid_value() {
        return this.__fieldsecurityprofileid_value;
    };
    /**
     * Sets the _fieldsecurityprofileid_value property value. 
     * @param value Value to set for the _fieldsecurityprofileid_value property.
     */
    public set _fieldsecurityprofileid_value(value: string | undefined) {
        this.__fieldsecurityprofileid_value = value;
    };
    /**
     * Gets the _organizationid_value property value. 
     * @returns a string
     */
    public get _organizationid_value() {
        return this.__organizationid_value;
    };
    /**
     * Sets the _organizationid_value property value. 
     * @param value Value to set for the _organizationid_value property.
     */
    public set _organizationid_value(value: string | undefined) {
        this.__organizationid_value = value;
    };
    /**
     * Gets the attributelogicalname property value. 
     * @returns a string
     */
    public get attributelogicalname() {
        return this._attributelogicalname;
    };
    /**
     * Sets the attributelogicalname property value. 
     * @param value Value to set for the attributelogicalname property.
     */
    public set attributelogicalname(value: string | undefined) {
        this._attributelogicalname = value;
    };
    /**
     * Gets the cancreate property value. 
     * @returns a integer
     */
    public get cancreate() {
        return this._cancreate;
    };
    /**
     * Sets the cancreate property value. 
     * @param value Value to set for the cancreate property.
     */
    public set cancreate(value: number | undefined) {
        this._cancreate = value;
    };
    /**
     * Gets the canread property value. 
     * @returns a integer
     */
    public get canread() {
        return this._canread;
    };
    /**
     * Sets the canread property value. 
     * @param value Value to set for the canread property.
     */
    public set canread(value: number | undefined) {
        this._canread = value;
    };
    /**
     * Gets the canupdate property value. 
     * @returns a integer
     */
    public get canupdate() {
        return this._canupdate;
    };
    /**
     * Sets the canupdate property value. 
     * @param value Value to set for the canupdate property.
     */
    public set canupdate(value: number | undefined) {
        this._canupdate = value;
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
     * Instantiates a new fieldpermission and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the entityname property value. 
     * @returns a string
     */
    public get entityname() {
        return this._entityname;
    };
    /**
     * Sets the entityname property value. 
     * @param value Value to set for the entityname property.
     */
    public set entityname(value: string | undefined) {
        this._entityname = value;
    };
    /**
     * Gets the fieldPermission_SyncErrors property value. 
     * @returns a syncerror
     */
    public get fieldPermission_SyncErrors() {
        return this._fieldPermission_SyncErrors;
    };
    /**
     * Sets the fieldPermission_SyncErrors property value. 
     * @param value Value to set for the FieldPermission_SyncErrors property.
     */
    public set fieldPermission_SyncErrors(value: Syncerror[] | undefined) {
        this._fieldPermission_SyncErrors = value;
    };
    /**
     * Gets the fieldpermissionid property value. 
     * @returns a string
     */
    public get fieldpermissionid() {
        return this._fieldpermissionid;
    };
    /**
     * Sets the fieldpermissionid property value. 
     * @param value Value to set for the fieldpermissionid property.
     */
    public set fieldpermissionid(value: string | undefined) {
        this._fieldpermissionid = value;
    };
    /**
     * Gets the fieldpermissionidunique property value. 
     * @returns a string
     */
    public get fieldpermissionidunique() {
        return this._fieldpermissionidunique;
    };
    /**
     * Sets the fieldpermissionidunique property value. 
     * @param value Value to set for the fieldpermissionidunique property.
     */
    public set fieldpermissionidunique(value: string | undefined) {
        this._fieldpermissionidunique = value;
    };
    /**
     * Gets the fieldsecurityprofileid property value. 
     * @returns a fieldsecurityprofile
     */
    public get fieldsecurityprofileid() {
        return this._fieldsecurityprofileid;
    };
    /**
     * Sets the fieldsecurityprofileid property value. 
     * @param value Value to set for the fieldsecurityprofileid property.
     */
    public set fieldsecurityprofileid(value: Fieldsecurityprofile | undefined) {
        this._fieldsecurityprofileid = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_fieldsecurityprofileid_value": (o, n) => { (o as unknown as Fieldpermission)._fieldsecurityprofileid_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Fieldpermission)._organizationid_value = n.getStringValue(); },
            "attributelogicalname": (o, n) => { (o as unknown as Fieldpermission).attributelogicalname = n.getStringValue(); },
            "cancreate": (o, n) => { (o as unknown as Fieldpermission).cancreate = n.getNumberValue(); },
            "canread": (o, n) => { (o as unknown as Fieldpermission).canread = n.getNumberValue(); },
            "canupdate": (o, n) => { (o as unknown as Fieldpermission).canupdate = n.getNumberValue(); },
            "componentstate": (o, n) => { (o as unknown as Fieldpermission).componentstate = n.getNumberValue(); },
            "entityname": (o, n) => { (o as unknown as Fieldpermission).entityname = n.getStringValue(); },
            "fieldPermission_SyncErrors": (o, n) => { (o as unknown as Fieldpermission).fieldPermission_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "fieldpermissionid": (o, n) => { (o as unknown as Fieldpermission).fieldpermissionid = n.getStringValue(); },
            "fieldpermissionidunique": (o, n) => { (o as unknown as Fieldpermission).fieldpermissionidunique = n.getStringValue(); },
            "fieldsecurityprofileid": (o, n) => { (o as unknown as Fieldpermission).fieldsecurityprofileid = n.getObjectValue<Fieldsecurityprofile>(createFieldsecurityprofileFromDiscriminatorValue); },
            "ismanaged": (o, n) => { (o as unknown as Fieldpermission).ismanaged = n.getBooleanValue(); },
            "overwritetime": (o, n) => { (o as unknown as Fieldpermission).overwritetime = n.getDateValue(); },
            "solution_fieldpermission": (o, n) => { (o as unknown as Fieldpermission).solution_fieldpermission = n.getObjectValue<Solution>(createSolutionFromDiscriminatorValue); },
            "solutionid": (o, n) => { (o as unknown as Fieldpermission).solutionid = n.getStringValue(); },
            "versionnumber": (o, n) => { (o as unknown as Fieldpermission).versionnumber = n.getNumberValue(); },
        };
    };
    /**
     * Gets the ismanaged property value. 
     * @returns a boolean
     */
    public get ismanaged() {
        return this._ismanaged;
    };
    /**
     * Sets the ismanaged property value. 
     * @param value Value to set for the ismanaged property.
     */
    public set ismanaged(value: boolean | undefined) {
        this._ismanaged = value;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("_fieldsecurityprofileid_value", this._fieldsecurityprofileid_value);
        writer.writeStringValue("_organizationid_value", this._organizationid_value);
        writer.writeStringValue("attributelogicalname", this.attributelogicalname);
        writer.writeNumberValue("cancreate", this.cancreate);
        writer.writeNumberValue("canread", this.canread);
        writer.writeNumberValue("canupdate", this.canupdate);
        writer.writeNumberValue("componentstate", this.componentstate);
        writer.writeStringValue("entityname", this.entityname);
        writer.writeCollectionOfObjectValues<Syncerror>("fieldPermission_SyncErrors", this.fieldPermission_SyncErrors);
        writer.writeStringValue("fieldpermissionid", this.fieldpermissionid);
        writer.writeStringValue("fieldpermissionidunique", this.fieldpermissionidunique);
        writer.writeObjectValue<Fieldsecurityprofile>("fieldsecurityprofileid", this.fieldsecurityprofileid);
        writer.writeBooleanValue("ismanaged", this.ismanaged);
        writer.writeDateValue("overwritetime", this.overwritetime);
        writer.writeObjectValue<Solution>("solution_fieldpermission", this.solution_fieldpermission);
        writer.writeStringValue("solutionid", this.solutionid);
        writer.writeNumberValue("versionnumber", this.versionnumber);
    };
    /**
     * Gets the solution_fieldpermission property value. 
     * @returns a solution
     */
    public get solution_fieldpermission() {
        return this._solution_fieldpermission;
    };
    /**
     * Sets the solution_fieldpermission property value. 
     * @param value Value to set for the solution_fieldpermission property.
     */
    public set solution_fieldpermission(value: Solution | undefined) {
        this._solution_fieldpermission = value;
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
