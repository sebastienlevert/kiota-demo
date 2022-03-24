import {createAnnotationFromDiscriminatorValue} from './createAnnotationFromDiscriminatorValue';
import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createConnectionFromDiscriminatorValue} from './createConnectionFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createEntitlementFromDiscriminatorValue} from './createEntitlementFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {createTransactioncurrencyFromDiscriminatorValue} from './createTransactioncurrencyFromDiscriminatorValue';
import {Annotation, Asyncoperation, Bulkdeletefailure, Connection, Crmbaseentity, Duplicaterecord, Entitlement, Mailboxtrackingfolder, Organization, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team, Transactioncurrency} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Entitlementchannel extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __entitlementid_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private __transactioncurrencyid_value?: string | undefined;
    private _channel?: number | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _entitlementchannel_Annotations?: Annotation[] | undefined;
    private _entitlementchannel_AsyncOperations?: Asyncoperation[] | undefined;
    private _entitlementchannel_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _entitlementchannel_connections1?: Connection[] | undefined;
    private _entitlementchannel_connections2?: Connection[] | undefined;
    private _entitlementchannel_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _entitlementchannel_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _entitlementchannel_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _entitlementchannel_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _entitlementchannel_ProcessSession?: Processsession[] | undefined;
    private _entitlementchannel_SyncErrors?: Syncerror[] | undefined;
    private _entitlementchannelid?: string | undefined;
    private _entitlementid?: Entitlement | undefined;
    private _exchangerate?: number | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _name?: string | undefined;
    private _organizationid?: Organization | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _owningteam?: Team | undefined;
    private _owninguser?: Systemuser | undefined;
    private _remainingterms?: number | undefined;
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
     * Gets the _entitlementid_value property value. 
     * @returns a string
     */
    public get _entitlementid_value() {
        return this.__entitlementid_value;
    };
    /**
     * Sets the _entitlementid_value property value. 
     * @param value Value to set for the _entitlementid_value property.
     */
    public set _entitlementid_value(value: string | undefined) {
        this.__entitlementid_value = value;
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
     * Gets the _owningbusinessunit_value property value. 
     * @returns a string
     */
    public get _owningbusinessunit_value() {
        return this.__owningbusinessunit_value;
    };
    /**
     * Sets the _owningbusinessunit_value property value. 
     * @param value Value to set for the _owningbusinessunit_value property.
     */
    public set _owningbusinessunit_value(value: string | undefined) {
        this.__owningbusinessunit_value = value;
    };
    /**
     * Gets the _owningteam_value property value. 
     * @returns a string
     */
    public get _owningteam_value() {
        return this.__owningteam_value;
    };
    /**
     * Sets the _owningteam_value property value. 
     * @param value Value to set for the _owningteam_value property.
     */
    public set _owningteam_value(value: string | undefined) {
        this.__owningteam_value = value;
    };
    /**
     * Gets the _owninguser_value property value. 
     * @returns a string
     */
    public get _owninguser_value() {
        return this.__owninguser_value;
    };
    /**
     * Sets the _owninguser_value property value. 
     * @param value Value to set for the _owninguser_value property.
     */
    public set _owninguser_value(value: string | undefined) {
        this.__owninguser_value = value;
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
     * Instantiates a new entitlementchannel and sets the default values.
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
     * Gets the entitlementchannel_Annotations property value. 
     * @returns a annotation
     */
    public get entitlementchannel_Annotations() {
        return this._entitlementchannel_Annotations;
    };
    /**
     * Sets the entitlementchannel_Annotations property value. 
     * @param value Value to set for the entitlementchannel_Annotations property.
     */
    public set entitlementchannel_Annotations(value: Annotation[] | undefined) {
        this._entitlementchannel_Annotations = value;
    };
    /**
     * Gets the entitlementchannel_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get entitlementchannel_AsyncOperations() {
        return this._entitlementchannel_AsyncOperations;
    };
    /**
     * Sets the entitlementchannel_AsyncOperations property value. 
     * @param value Value to set for the entitlementchannel_AsyncOperations property.
     */
    public set entitlementchannel_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._entitlementchannel_AsyncOperations = value;
    };
    /**
     * Gets the entitlementchannel_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get entitlementchannel_BulkDeleteFailures() {
        return this._entitlementchannel_BulkDeleteFailures;
    };
    /**
     * Sets the entitlementchannel_BulkDeleteFailures property value. 
     * @param value Value to set for the entitlementchannel_BulkDeleteFailures property.
     */
    public set entitlementchannel_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._entitlementchannel_BulkDeleteFailures = value;
    };
    /**
     * Gets the entitlementchannel_connections1 property value. 
     * @returns a connection
     */
    public get entitlementchannel_connections1() {
        return this._entitlementchannel_connections1;
    };
    /**
     * Sets the entitlementchannel_connections1 property value. 
     * @param value Value to set for the entitlementchannel_connections1 property.
     */
    public set entitlementchannel_connections1(value: Connection[] | undefined) {
        this._entitlementchannel_connections1 = value;
    };
    /**
     * Gets the entitlementchannel_connections2 property value. 
     * @returns a connection
     */
    public get entitlementchannel_connections2() {
        return this._entitlementchannel_connections2;
    };
    /**
     * Sets the entitlementchannel_connections2 property value. 
     * @param value Value to set for the entitlementchannel_connections2 property.
     */
    public set entitlementchannel_connections2(value: Connection[] | undefined) {
        this._entitlementchannel_connections2 = value;
    };
    /**
     * Gets the entitlementchannel_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get entitlementchannel_DuplicateBaseRecord() {
        return this._entitlementchannel_DuplicateBaseRecord;
    };
    /**
     * Sets the entitlementchannel_DuplicateBaseRecord property value. 
     * @param value Value to set for the entitlementchannel_DuplicateBaseRecord property.
     */
    public set entitlementchannel_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._entitlementchannel_DuplicateBaseRecord = value;
    };
    /**
     * Gets the entitlementchannel_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get entitlementchannel_DuplicateMatchingRecord() {
        return this._entitlementchannel_DuplicateMatchingRecord;
    };
    /**
     * Sets the entitlementchannel_DuplicateMatchingRecord property value. 
     * @param value Value to set for the entitlementchannel_DuplicateMatchingRecord property.
     */
    public set entitlementchannel_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._entitlementchannel_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the entitlementchannel_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get entitlementchannel_MailboxTrackingFolders() {
        return this._entitlementchannel_MailboxTrackingFolders;
    };
    /**
     * Sets the entitlementchannel_MailboxTrackingFolders property value. 
     * @param value Value to set for the entitlementchannel_MailboxTrackingFolders property.
     */
    public set entitlementchannel_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._entitlementchannel_MailboxTrackingFolders = value;
    };
    /**
     * Gets the entitlementchannel_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get entitlementchannel_PrincipalObjectAttributeAccesses() {
        return this._entitlementchannel_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the entitlementchannel_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the entitlementchannel_PrincipalObjectAttributeAccesses property.
     */
    public set entitlementchannel_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._entitlementchannel_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the entitlementchannel_ProcessSession property value. 
     * @returns a processsession
     */
    public get entitlementchannel_ProcessSession() {
        return this._entitlementchannel_ProcessSession;
    };
    /**
     * Sets the entitlementchannel_ProcessSession property value. 
     * @param value Value to set for the entitlementchannel_ProcessSession property.
     */
    public set entitlementchannel_ProcessSession(value: Processsession[] | undefined) {
        this._entitlementchannel_ProcessSession = value;
    };
    /**
     * Gets the entitlementchannel_SyncErrors property value. 
     * @returns a syncerror
     */
    public get entitlementchannel_SyncErrors() {
        return this._entitlementchannel_SyncErrors;
    };
    /**
     * Sets the entitlementchannel_SyncErrors property value. 
     * @param value Value to set for the entitlementchannel_SyncErrors property.
     */
    public set entitlementchannel_SyncErrors(value: Syncerror[] | undefined) {
        this._entitlementchannel_SyncErrors = value;
    };
    /**
     * Gets the entitlementchannelid property value. 
     * @returns a string
     */
    public get entitlementchannelid() {
        return this._entitlementchannelid;
    };
    /**
     * Sets the entitlementchannelid property value. 
     * @param value Value to set for the entitlementchannelid property.
     */
    public set entitlementchannelid(value: string | undefined) {
        this._entitlementchannelid = value;
    };
    /**
     * Gets the entitlementid property value. 
     * @returns a entitlement
     */
    public get entitlementid() {
        return this._entitlementid;
    };
    /**
     * Sets the entitlementid property value. 
     * @param value Value to set for the entitlementid property.
     */
    public set entitlementid(value: Entitlement | undefined) {
        this._entitlementid = value;
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
            "_createdby_value": (o, n) => { (o as unknown as Entitlementchannel)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Entitlementchannel)._createdonbehalfby_value = n.getStringValue(); },
            "_entitlementid_value": (o, n) => { (o as unknown as Entitlementchannel)._entitlementid_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Entitlementchannel)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Entitlementchannel)._modifiedonbehalfby_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Entitlementchannel)._organizationid_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Entitlementchannel)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Entitlementchannel)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Entitlementchannel)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Entitlementchannel)._owninguser_value = n.getStringValue(); },
            "_transactioncurrencyid_value": (o, n) => { (o as unknown as Entitlementchannel)._transactioncurrencyid_value = n.getStringValue(); },
            "channel": (o, n) => { (o as unknown as Entitlementchannel).channel = n.getNumberValue(); },
            "createdby": (o, n) => { (o as unknown as Entitlementchannel).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Entitlementchannel).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Entitlementchannel).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "entitlementchannel_Annotations": (o, n) => { (o as unknown as Entitlementchannel).entitlementchannel_Annotations = n.getCollectionOfObjectValues<Annotation>(createAnnotationFromDiscriminatorValue); },
            "entitlementchannel_AsyncOperations": (o, n) => { (o as unknown as Entitlementchannel).entitlementchannel_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "entitlementchannel_BulkDeleteFailures": (o, n) => { (o as unknown as Entitlementchannel).entitlementchannel_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "entitlementchannel_connections1": (o, n) => { (o as unknown as Entitlementchannel).entitlementchannel_connections1 = n.getCollectionOfObjectValues<Connection>(createConnectionFromDiscriminatorValue); },
            "entitlementchannel_connections2": (o, n) => { (o as unknown as Entitlementchannel).entitlementchannel_connections2 = n.getCollectionOfObjectValues<Connection>(createConnectionFromDiscriminatorValue); },
            "entitlementchannel_DuplicateBaseRecord": (o, n) => { (o as unknown as Entitlementchannel).entitlementchannel_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "entitlementchannel_DuplicateMatchingRecord": (o, n) => { (o as unknown as Entitlementchannel).entitlementchannel_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "entitlementchannel_MailboxTrackingFolders": (o, n) => { (o as unknown as Entitlementchannel).entitlementchannel_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "entitlementchannel_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Entitlementchannel).entitlementchannel_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "entitlementchannel_ProcessSession": (o, n) => { (o as unknown as Entitlementchannel).entitlementchannel_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "entitlementchannel_SyncErrors": (o, n) => { (o as unknown as Entitlementchannel).entitlementchannel_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "entitlementchannelid": (o, n) => { (o as unknown as Entitlementchannel).entitlementchannelid = n.getStringValue(); },
            "entitlementid": (o, n) => { (o as unknown as Entitlementchannel).entitlementid = n.getObjectValue<Entitlement>(createEntitlementFromDiscriminatorValue); },
            "exchangerate": (o, n) => { (o as unknown as Entitlementchannel).exchangerate = n.getNumberValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Entitlementchannel).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Entitlementchannel).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Entitlementchannel).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Entitlementchannel).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "name": (o, n) => { (o as unknown as Entitlementchannel).name = n.getStringValue(); },
            "organizationid": (o, n) => { (o as unknown as Entitlementchannel).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Entitlementchannel).overriddencreatedon = n.getDateValue(); },
            "owningteam": (o, n) => { (o as unknown as Entitlementchannel).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Entitlementchannel).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "remainingterms": (o, n) => { (o as unknown as Entitlementchannel).remainingterms = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Entitlementchannel).timezoneruleversionnumber = n.getNumberValue(); },
            "totalterms": (o, n) => { (o as unknown as Entitlementchannel).totalterms = n.getNumberValue(); },
            "transactioncurrencyid": (o, n) => { (o as unknown as Entitlementchannel).transactioncurrencyid = n.getObjectValue<Transactioncurrency>(createTransactioncurrencyFromDiscriminatorValue); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Entitlementchannel).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Entitlementchannel).versionnumber = n.getNumberValue(); },
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
     * Gets the owningteam property value. 
     * @returns a team
     */
    public get owningteam() {
        return this._owningteam;
    };
    /**
     * Sets the owningteam property value. 
     * @param value Value to set for the owningteam property.
     */
    public set owningteam(value: Team | undefined) {
        this._owningteam = value;
    };
    /**
     * Gets the owninguser property value. 
     * @returns a systemuser
     */
    public get owninguser() {
        return this._owninguser;
    };
    /**
     * Sets the owninguser property value. 
     * @param value Value to set for the owninguser property.
     */
    public set owninguser(value: Systemuser | undefined) {
        this._owninguser = value;
    };
    /**
     * Gets the remainingterms property value. 
     * @returns a int64
     */
    public get remainingterms() {
        return this._remainingterms;
    };
    /**
     * Sets the remainingterms property value. 
     * @param value Value to set for the remainingterms property.
     */
    public set remainingterms(value: number | undefined) {
        this._remainingterms = value;
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
        writer.writeStringValue("_entitlementid_value", this._entitlementid_value);
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_organizationid_value", this._organizationid_value);
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_owningteam_value", this._owningteam_value);
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeStringValue("_transactioncurrencyid_value", this._transactioncurrencyid_value);
        writer.writeNumberValue("channel", this.channel);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeCollectionOfObjectValues<Annotation>("entitlementchannel_Annotations", this.entitlementchannel_Annotations);
        writer.writeCollectionOfObjectValues<Asyncoperation>("entitlementchannel_AsyncOperations", this.entitlementchannel_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("entitlementchannel_BulkDeleteFailures", this.entitlementchannel_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Connection>("entitlementchannel_connections1", this.entitlementchannel_connections1);
        writer.writeCollectionOfObjectValues<Connection>("entitlementchannel_connections2", this.entitlementchannel_connections2);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("entitlementchannel_DuplicateBaseRecord", this.entitlementchannel_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("entitlementchannel_DuplicateMatchingRecord", this.entitlementchannel_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("entitlementchannel_MailboxTrackingFolders", this.entitlementchannel_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("entitlementchannel_PrincipalObjectAttributeAccesses", this.entitlementchannel_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("entitlementchannel_ProcessSession", this.entitlementchannel_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("entitlementchannel_SyncErrors", this.entitlementchannel_SyncErrors);
        writer.writeStringValue("entitlementchannelid", this.entitlementchannelid);
        writer.writeObjectValue<Entitlement>("entitlementid", this.entitlementid);
        writer.writeNumberValue("exchangerate", this.exchangerate);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeStringValue("name", this.name);
        writer.writeObjectValue<Organization>("organizationid", this.organizationid);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeObjectValue<Team>("owningteam", this.owningteam);
        writer.writeObjectValue<Systemuser>("owninguser", this.owninguser);
        writer.writeNumberValue("remainingterms", this.remainingterms);
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
