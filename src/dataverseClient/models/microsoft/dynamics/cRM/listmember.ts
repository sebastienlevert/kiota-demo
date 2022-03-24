import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Crmbaseentity, Mailboxtrackingfolder, Principalobjectattributeaccess, Systemuser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Listmember extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __entityid_value?: string | undefined;
    private __listid_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _entitytype?: string | undefined;
    private _importsequencenumber?: number | undefined;
    private _listmember_AsyncOperations?: Asyncoperation[] | undefined;
    private _listmember_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _listmember_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _listmember_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _listmemberid?: string | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _name?: string | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _owningbusinessunit?: string | undefined;
    private _owninguser?: string | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _utcconversiontimezonecode?: number | undefined;
    private _versionnumber?: number | undefined;
    /**
     * Gets the _createdby_value property value. 
     * @returns a string
     */
    public get _createdby_value() {
        return this.__createdby_value;
    };
    /**
     * Sets the _createdby_value property value. 
     * @param value Value to set for the _createdby_value property.
     */
    public set _createdby_value(value: string | undefined) {
        this.__createdby_value = value;
    };
    /**
     * Gets the _createdonbehalfby_value property value. 
     * @returns a string
     */
    public get _createdonbehalfby_value() {
        return this.__createdonbehalfby_value;
    };
    /**
     * Sets the _createdonbehalfby_value property value. 
     * @param value Value to set for the _createdonbehalfby_value property.
     */
    public set _createdonbehalfby_value(value: string | undefined) {
        this.__createdonbehalfby_value = value;
    };
    /**
     * Gets the _entityid_value property value. 
     * @returns a string
     */
    public get _entityid_value() {
        return this.__entityid_value;
    };
    /**
     * Sets the _entityid_value property value. 
     * @param value Value to set for the _entityid_value property.
     */
    public set _entityid_value(value: string | undefined) {
        this.__entityid_value = value;
    };
    /**
     * Gets the _listid_value property value. 
     * @returns a string
     */
    public get _listid_value() {
        return this.__listid_value;
    };
    /**
     * Sets the _listid_value property value. 
     * @param value Value to set for the _listid_value property.
     */
    public set _listid_value(value: string | undefined) {
        this.__listid_value = value;
    };
    /**
     * Gets the _modifiedby_value property value. 
     * @returns a string
     */
    public get _modifiedby_value() {
        return this.__modifiedby_value;
    };
    /**
     * Sets the _modifiedby_value property value. 
     * @param value Value to set for the _modifiedby_value property.
     */
    public set _modifiedby_value(value: string | undefined) {
        this.__modifiedby_value = value;
    };
    /**
     * Gets the _modifiedonbehalfby_value property value. 
     * @returns a string
     */
    public get _modifiedonbehalfby_value() {
        return this.__modifiedonbehalfby_value;
    };
    /**
     * Sets the _modifiedonbehalfby_value property value. 
     * @param value Value to set for the _modifiedonbehalfby_value property.
     */
    public set _modifiedonbehalfby_value(value: string | undefined) {
        this.__modifiedonbehalfby_value = value;
    };
    /**
     * Gets the _ownerid_value property value. 
     * @returns a string
     */
    public get _ownerid_value() {
        return this.__ownerid_value;
    };
    /**
     * Sets the _ownerid_value property value. 
     * @param value Value to set for the _ownerid_value property.
     */
    public set _ownerid_value(value: string | undefined) {
        this.__ownerid_value = value;
    };
    /**
     * Instantiates a new listmember and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the createdby property value. 
     * @returns a systemuser
     */
    public get createdby() {
        return this._createdby;
    };
    /**
     * Sets the createdby property value. 
     * @param value Value to set for the createdby property.
     */
    public set createdby(value: Systemuser | undefined) {
        this._createdby = value;
    };
    /**
     * Gets the createdon property value. 
     * @returns a Date
     */
    public get createdon() {
        return this._createdon;
    };
    /**
     * Sets the createdon property value. 
     * @param value Value to set for the createdon property.
     */
    public set createdon(value: Date | undefined) {
        this._createdon = value;
    };
    /**
     * Gets the createdonbehalfby property value. 
     * @returns a systemuser
     */
    public get createdonbehalfby() {
        return this._createdonbehalfby;
    };
    /**
     * Sets the createdonbehalfby property value. 
     * @param value Value to set for the createdonbehalfby property.
     */
    public set createdonbehalfby(value: Systemuser | undefined) {
        this._createdonbehalfby = value;
    };
    /**
     * Gets the entitytype property value. 
     * @returns a string
     */
    public get entitytype() {
        return this._entitytype;
    };
    /**
     * Sets the entitytype property value. 
     * @param value Value to set for the entitytype property.
     */
    public set entitytype(value: string | undefined) {
        this._entitytype = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Listmember)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Listmember)._createdonbehalfby_value = n.getStringValue(); },
            "_entityid_value": (o, n) => { (o as unknown as Listmember)._entityid_value = n.getStringValue(); },
            "_listid_value": (o, n) => { (o as unknown as Listmember)._listid_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Listmember)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Listmember)._modifiedonbehalfby_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Listmember)._ownerid_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Listmember).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Listmember).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Listmember).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "entitytype": (o, n) => { (o as unknown as Listmember).entitytype = n.getStringValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Listmember).importsequencenumber = n.getNumberValue(); },
            "listmember_AsyncOperations": (o, n) => { (o as unknown as Listmember).listmember_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "listmember_BulkDeleteFailures": (o, n) => { (o as unknown as Listmember).listmember_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "listmember_MailboxTrackingFolders": (o, n) => { (o as unknown as Listmember).listmember_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "listmember_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Listmember).listmember_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "listmemberid": (o, n) => { (o as unknown as Listmember).listmemberid = n.getStringValue(); },
            "modifiedby": (o, n) => { (o as unknown as Listmember).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Listmember).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Listmember).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "name": (o, n) => { (o as unknown as Listmember).name = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Listmember).overriddencreatedon = n.getDateValue(); },
            "owningbusinessunit": (o, n) => { (o as unknown as Listmember).owningbusinessunit = n.getStringValue(); },
            "owninguser": (o, n) => { (o as unknown as Listmember).owninguser = n.getStringValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Listmember).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Listmember).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Listmember).versionnumber = n.getNumberValue(); },
        };
    };
    /**
     * Gets the importsequencenumber property value. 
     * @returns a integer
     */
    public get importsequencenumber() {
        return this._importsequencenumber;
    };
    /**
     * Sets the importsequencenumber property value. 
     * @param value Value to set for the importsequencenumber property.
     */
    public set importsequencenumber(value: number | undefined) {
        this._importsequencenumber = value;
    };
    /**
     * Gets the listmember_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get listmember_AsyncOperations() {
        return this._listmember_AsyncOperations;
    };
    /**
     * Sets the listmember_AsyncOperations property value. 
     * @param value Value to set for the listmember_AsyncOperations property.
     */
    public set listmember_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._listmember_AsyncOperations = value;
    };
    /**
     * Gets the listmember_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get listmember_BulkDeleteFailures() {
        return this._listmember_BulkDeleteFailures;
    };
    /**
     * Sets the listmember_BulkDeleteFailures property value. 
     * @param value Value to set for the listmember_BulkDeleteFailures property.
     */
    public set listmember_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._listmember_BulkDeleteFailures = value;
    };
    /**
     * Gets the listmember_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get listmember_MailboxTrackingFolders() {
        return this._listmember_MailboxTrackingFolders;
    };
    /**
     * Sets the listmember_MailboxTrackingFolders property value. 
     * @param value Value to set for the listmember_MailboxTrackingFolders property.
     */
    public set listmember_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._listmember_MailboxTrackingFolders = value;
    };
    /**
     * Gets the listmember_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get listmember_PrincipalObjectAttributeAccesses() {
        return this._listmember_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the listmember_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the listmember_PrincipalObjectAttributeAccesses property.
     */
    public set listmember_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._listmember_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the listmemberid property value. 
     * @returns a string
     */
    public get listmemberid() {
        return this._listmemberid;
    };
    /**
     * Sets the listmemberid property value. 
     * @param value Value to set for the listmemberid property.
     */
    public set listmemberid(value: string | undefined) {
        this._listmemberid = value;
    };
    /**
     * Gets the modifiedby property value. 
     * @returns a systemuser
     */
    public get modifiedby() {
        return this._modifiedby;
    };
    /**
     * Sets the modifiedby property value. 
     * @param value Value to set for the modifiedby property.
     */
    public set modifiedby(value: Systemuser | undefined) {
        this._modifiedby = value;
    };
    /**
     * Gets the modifiedon property value. 
     * @returns a Date
     */
    public get modifiedon() {
        return this._modifiedon;
    };
    /**
     * Sets the modifiedon property value. 
     * @param value Value to set for the modifiedon property.
     */
    public set modifiedon(value: Date | undefined) {
        this._modifiedon = value;
    };
    /**
     * Gets the modifiedonbehalfby property value. 
     * @returns a systemuser
     */
    public get modifiedonbehalfby() {
        return this._modifiedonbehalfby;
    };
    /**
     * Sets the modifiedonbehalfby property value. 
     * @param value Value to set for the modifiedonbehalfby property.
     */
    public set modifiedonbehalfby(value: Systemuser | undefined) {
        this._modifiedonbehalfby = value;
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
     * Gets the overriddencreatedon property value. 
     * @returns a Date
     */
    public get overriddencreatedon() {
        return this._overriddencreatedon;
    };
    /**
     * Sets the overriddencreatedon property value. 
     * @param value Value to set for the overriddencreatedon property.
     */
    public set overriddencreatedon(value: Date | undefined) {
        this._overriddencreatedon = value;
    };
    /**
     * Gets the owningbusinessunit property value. 
     * @returns a string
     */
    public get owningbusinessunit() {
        return this._owningbusinessunit;
    };
    /**
     * Sets the owningbusinessunit property value. 
     * @param value Value to set for the owningbusinessunit property.
     */
    public set owningbusinessunit(value: string | undefined) {
        this._owningbusinessunit = value;
    };
    /**
     * Gets the owninguser property value. 
     * @returns a string
     */
    public get owninguser() {
        return this._owninguser;
    };
    /**
     * Sets the owninguser property value. 
     * @param value Value to set for the owninguser property.
     */
    public set owninguser(value: string | undefined) {
        this._owninguser = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("_createdby_value", this._createdby_value);
        writer.writeStringValue("_createdonbehalfby_value", this._createdonbehalfby_value);
        writer.writeStringValue("_entityid_value", this._entityid_value);
        writer.writeStringValue("_listid_value", this._listid_value);
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeStringValue("entitytype", this.entitytype);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeCollectionOfObjectValues<Asyncoperation>("listmember_AsyncOperations", this.listmember_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("listmember_BulkDeleteFailures", this.listmember_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("listmember_MailboxTrackingFolders", this.listmember_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("listmember_PrincipalObjectAttributeAccesses", this.listmember_PrincipalObjectAttributeAccesses);
        writer.writeStringValue("listmemberid", this.listmemberid);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeStringValue("name", this.name);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeStringValue("owningbusinessunit", this.owningbusinessunit);
        writer.writeStringValue("owninguser", this.owninguser);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
        writer.writeNumberValue("versionnumber", this.versionnumber);
    };
    /**
     * Gets the timezoneruleversionnumber property value. 
     * @returns a integer
     */
    public get timezoneruleversionnumber() {
        return this._timezoneruleversionnumber;
    };
    /**
     * Sets the timezoneruleversionnumber property value. 
     * @param value Value to set for the timezoneruleversionnumber property.
     */
    public set timezoneruleversionnumber(value: number | undefined) {
        this._timezoneruleversionnumber = value;
    };
    /**
     * Gets the utcconversiontimezonecode property value. 
     * @returns a integer
     */
    public get utcconversiontimezonecode() {
        return this._utcconversiontimezonecode;
    };
    /**
     * Sets the utcconversiontimezonecode property value. 
     * @param value Value to set for the utcconversiontimezonecode property.
     */
    public set utcconversiontimezonecode(value: number | undefined) {
        this._utcconversiontimezonecode = value;
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
