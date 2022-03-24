import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createConnectionFromDiscriminatorValue} from './createConnectionFromDiscriminatorValue';
import {createEntitlementtemplateFromDiscriminatorValue} from './createEntitlementtemplateFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTransactioncurrencyFromDiscriminatorValue} from './createTransactioncurrencyFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Connection, Crmbaseentity, Entitlementtemplate, Mailboxtrackingfolder, Organization, Principalobjectattributeaccess, Syncerror, Systemuser, Transactioncurrency} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Entitlementtemplatechannel extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __entitlementtemplateid_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private __transactioncurrencyid_value?: string | undefined;
    private _channel?: number | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _entitlementtemplatechannel_AsyncOperations?: Asyncoperation[] | undefined;
    private _entitlementtemplatechannel_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _entitlementtemplatechannel_connections1?: Connection[] | undefined;
    private _entitlementtemplatechannel_connections2?: Connection[] | undefined;
    private _entitlementtemplatechannel_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _entitlementtemplatechannel_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _entitlementtemplatechannel_SyncErrors?: Syncerror[] | undefined;
    private _entitlementtemplatechannelid?: string | undefined;
    private _entitlementtemplateid?: Entitlementtemplate | undefined;
    private _exchangerate?: number | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _name?: string | undefined;
    private _organizationid?: Organization | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _totalterms?: number | undefined;
    private _transactioncurrencyid?: Transactioncurrency | undefined;
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
     * Gets the _entitlementtemplateid_value property value. 
     * @returns a string
     */
    public get _entitlementtemplateid_value() {
        return this.__entitlementtemplateid_value;
    };
    /**
     * Sets the _entitlementtemplateid_value property value. 
     * @param value Value to set for the _entitlementtemplateid_value property.
     */
    public set _entitlementtemplateid_value(value: string | undefined) {
        this.__entitlementtemplateid_value = value;
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
     * Gets the _transactioncurrencyid_value property value. 
     * @returns a string
     */
    public get _transactioncurrencyid_value() {
        return this.__transactioncurrencyid_value;
    };
    /**
     * Sets the _transactioncurrencyid_value property value. 
     * @param value Value to set for the _transactioncurrencyid_value property.
     */
    public set _transactioncurrencyid_value(value: string | undefined) {
        this.__transactioncurrencyid_value = value;
    };
    /**
     * Gets the channel property value. 
     * @returns a integer
     */
    public get channel() {
        return this._channel;
    };
    /**
     * Sets the channel property value. 
     * @param value Value to set for the channel property.
     */
    public set channel(value: number | undefined) {
        this._channel = value;
    };
    /**
     * Instantiates a new entitlementtemplatechannel and sets the default values.
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
     * Gets the entitlementtemplatechannel_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get entitlementtemplatechannel_AsyncOperations() {
        return this._entitlementtemplatechannel_AsyncOperations;
    };
    /**
     * Sets the entitlementtemplatechannel_AsyncOperations property value. 
     * @param value Value to set for the entitlementtemplatechannel_AsyncOperations property.
     */
    public set entitlementtemplatechannel_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._entitlementtemplatechannel_AsyncOperations = value;
    };
    /**
     * Gets the entitlementtemplatechannel_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get entitlementtemplatechannel_BulkDeleteFailures() {
        return this._entitlementtemplatechannel_BulkDeleteFailures;
    };
    /**
     * Sets the entitlementtemplatechannel_BulkDeleteFailures property value. 
     * @param value Value to set for the entitlementtemplatechannel_BulkDeleteFailures property.
     */
    public set entitlementtemplatechannel_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._entitlementtemplatechannel_BulkDeleteFailures = value;
    };
    /**
     * Gets the entitlementtemplatechannel_connections1 property value. 
     * @returns a connection
     */
    public get entitlementtemplatechannel_connections1() {
        return this._entitlementtemplatechannel_connections1;
    };
    /**
     * Sets the entitlementtemplatechannel_connections1 property value. 
     * @param value Value to set for the entitlementtemplatechannel_connections1 property.
     */
    public set entitlementtemplatechannel_connections1(value: Connection[] | undefined) {
        this._entitlementtemplatechannel_connections1 = value;
    };
    /**
     * Gets the entitlementtemplatechannel_connections2 property value. 
     * @returns a connection
     */
    public get entitlementtemplatechannel_connections2() {
        return this._entitlementtemplatechannel_connections2;
    };
    /**
     * Sets the entitlementtemplatechannel_connections2 property value. 
     * @param value Value to set for the entitlementtemplatechannel_connections2 property.
     */
    public set entitlementtemplatechannel_connections2(value: Connection[] | undefined) {
        this._entitlementtemplatechannel_connections2 = value;
    };
    /**
     * Gets the entitlementtemplatechannel_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get entitlementtemplatechannel_MailboxTrackingFolders() {
        return this._entitlementtemplatechannel_MailboxTrackingFolders;
    };
    /**
     * Sets the entitlementtemplatechannel_MailboxTrackingFolders property value. 
     * @param value Value to set for the entitlementtemplatechannel_MailboxTrackingFolders property.
     */
    public set entitlementtemplatechannel_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._entitlementtemplatechannel_MailboxTrackingFolders = value;
    };
    /**
     * Gets the entitlementtemplatechannel_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get entitlementtemplatechannel_PrincipalObjectAttributeAccesses() {
        return this._entitlementtemplatechannel_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the entitlementtemplatechannel_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the entitlementtemplatechannel_PrincipalObjectAttributeAccesses property.
     */
    public set entitlementtemplatechannel_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._entitlementtemplatechannel_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the entitlementtemplatechannel_SyncErrors property value. 
     * @returns a syncerror
     */
    public get entitlementtemplatechannel_SyncErrors() {
        return this._entitlementtemplatechannel_SyncErrors;
    };
    /**
     * Sets the entitlementtemplatechannel_SyncErrors property value. 
     * @param value Value to set for the entitlementtemplatechannel_SyncErrors property.
     */
    public set entitlementtemplatechannel_SyncErrors(value: Syncerror[] | undefined) {
        this._entitlementtemplatechannel_SyncErrors = value;
    };
    /**
     * Gets the entitlementtemplatechannelid property value. 
     * @returns a string
     */
    public get entitlementtemplatechannelid() {
        return this._entitlementtemplatechannelid;
    };
    /**
     * Sets the entitlementtemplatechannelid property value. 
     * @param value Value to set for the entitlementtemplatechannelid property.
     */
    public set entitlementtemplatechannelid(value: string | undefined) {
        this._entitlementtemplatechannelid = value;
    };
    /**
     * Gets the entitlementtemplateid property value. 
     * @returns a entitlementtemplate
     */
    public get entitlementtemplateid() {
        return this._entitlementtemplateid;
    };
    /**
     * Sets the entitlementtemplateid property value. 
     * @param value Value to set for the entitlementtemplateid property.
     */
    public set entitlementtemplateid(value: Entitlementtemplate | undefined) {
        this._entitlementtemplateid = value;
    };
    /**
     * Gets the exchangerate property value. 
     * @returns a int64
     */
    public get exchangerate() {
        return this._exchangerate;
    };
    /**
     * Sets the exchangerate property value. 
     * @param value Value to set for the exchangerate property.
     */
    public set exchangerate(value: number | undefined) {
        this._exchangerate = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Entitlementtemplatechannel)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Entitlementtemplatechannel)._createdonbehalfby_value = n.getStringValue(); },
            "_entitlementtemplateid_value": (o, n) => { (o as unknown as Entitlementtemplatechannel)._entitlementtemplateid_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Entitlementtemplatechannel)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Entitlementtemplatechannel)._modifiedonbehalfby_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Entitlementtemplatechannel)._organizationid_value = n.getStringValue(); },
            "_transactioncurrencyid_value": (o, n) => { (o as unknown as Entitlementtemplatechannel)._transactioncurrencyid_value = n.getStringValue(); },
            "channel": (o, n) => { (o as unknown as Entitlementtemplatechannel).channel = n.getNumberValue(); },
            "createdby": (o, n) => { (o as unknown as Entitlementtemplatechannel).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Entitlementtemplatechannel).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Entitlementtemplatechannel).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "entitlementtemplatechannel_AsyncOperations": (o, n) => { (o as unknown as Entitlementtemplatechannel).entitlementtemplatechannel_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "entitlementtemplatechannel_BulkDeleteFailures": (o, n) => { (o as unknown as Entitlementtemplatechannel).entitlementtemplatechannel_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "entitlementtemplatechannel_connections1": (o, n) => { (o as unknown as Entitlementtemplatechannel).entitlementtemplatechannel_connections1 = n.getCollectionOfObjectValues<Connection>(createConnectionFromDiscriminatorValue); },
            "entitlementtemplatechannel_connections2": (o, n) => { (o as unknown as Entitlementtemplatechannel).entitlementtemplatechannel_connections2 = n.getCollectionOfObjectValues<Connection>(createConnectionFromDiscriminatorValue); },
            "entitlementtemplatechannel_MailboxTrackingFolders": (o, n) => { (o as unknown as Entitlementtemplatechannel).entitlementtemplatechannel_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "entitlementtemplatechannel_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Entitlementtemplatechannel).entitlementtemplatechannel_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "entitlementtemplatechannel_SyncErrors": (o, n) => { (o as unknown as Entitlementtemplatechannel).entitlementtemplatechannel_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "entitlementtemplatechannelid": (o, n) => { (o as unknown as Entitlementtemplatechannel).entitlementtemplatechannelid = n.getStringValue(); },
            "entitlementtemplateid": (o, n) => { (o as unknown as Entitlementtemplatechannel).entitlementtemplateid = n.getObjectValue<Entitlementtemplate>(createEntitlementtemplateFromDiscriminatorValue); },
            "exchangerate": (o, n) => { (o as unknown as Entitlementtemplatechannel).exchangerate = n.getNumberValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Entitlementtemplatechannel).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Entitlementtemplatechannel).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Entitlementtemplatechannel).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Entitlementtemplatechannel).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "name": (o, n) => { (o as unknown as Entitlementtemplatechannel).name = n.getStringValue(); },
            "organizationid": (o, n) => { (o as unknown as Entitlementtemplatechannel).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Entitlementtemplatechannel).overriddencreatedon = n.getDateValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Entitlementtemplatechannel).timezoneruleversionnumber = n.getNumberValue(); },
            "totalterms": (o, n) => { (o as unknown as Entitlementtemplatechannel).totalterms = n.getNumberValue(); },
            "transactioncurrencyid": (o, n) => { (o as unknown as Entitlementtemplatechannel).transactioncurrencyid = n.getObjectValue<Transactioncurrency>(createTransactioncurrencyFromDiscriminatorValue); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Entitlementtemplatechannel).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Entitlementtemplatechannel).versionnumber = n.getNumberValue(); },
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
     * Gets the organizationid property value. 
     * @returns a organization
     */
    public get organizationid() {
        return this._organizationid;
    };
    /**
     * Sets the organizationid property value. 
     * @param value Value to set for the organizationid property.
     */
    public set organizationid(value: Organization | undefined) {
        this._organizationid = value;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("_createdby_value", this._createdby_value);
        writer.writeStringValue("_createdonbehalfby_value", this._createdonbehalfby_value);
        writer.writeStringValue("_entitlementtemplateid_value", this._entitlementtemplateid_value);
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_organizationid_value", this._organizationid_value);
        writer.writeStringValue("_transactioncurrencyid_value", this._transactioncurrencyid_value);
        writer.writeNumberValue("channel", this.channel);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeCollectionOfObjectValues<Asyncoperation>("entitlementtemplatechannel_AsyncOperations", this.entitlementtemplatechannel_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("entitlementtemplatechannel_BulkDeleteFailures", this.entitlementtemplatechannel_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Connection>("entitlementtemplatechannel_connections1", this.entitlementtemplatechannel_connections1);
        writer.writeCollectionOfObjectValues<Connection>("entitlementtemplatechannel_connections2", this.entitlementtemplatechannel_connections2);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("entitlementtemplatechannel_MailboxTrackingFolders", this.entitlementtemplatechannel_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("entitlementtemplatechannel_PrincipalObjectAttributeAccesses", this.entitlementtemplatechannel_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Syncerror>("entitlementtemplatechannel_SyncErrors", this.entitlementtemplatechannel_SyncErrors);
        writer.writeStringValue("entitlementtemplatechannelid", this.entitlementtemplatechannelid);
        writer.writeObjectValue<Entitlementtemplate>("entitlementtemplateid", this.entitlementtemplateid);
        writer.writeNumberValue("exchangerate", this.exchangerate);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeStringValue("name", this.name);
        writer.writeObjectValue<Organization>("organizationid", this.organizationid);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeNumberValue("totalterms", this.totalterms);
        writer.writeObjectValue<Transactioncurrency>("transactioncurrencyid", this.transactioncurrencyid);
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
     * Gets the totalterms property value. 
     * @returns a int64
     */
    public get totalterms() {
        return this._totalterms;
    };
    /**
     * Sets the totalterms property value. 
     * @param value Value to set for the totalterms property.
     */
    public set totalterms(value: number | undefined) {
        this._totalterms = value;
    };
    /**
     * Gets the transactioncurrencyid property value. 
     * @returns a transactioncurrency
     */
    public get transactioncurrencyid() {
        return this._transactioncurrencyid;
    };
    /**
     * Sets the transactioncurrencyid property value. 
     * @param value Value to set for the transactioncurrencyid property.
     */
    public set transactioncurrencyid(value: Transactioncurrency | undefined) {
        this._transactioncurrencyid = value;
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
