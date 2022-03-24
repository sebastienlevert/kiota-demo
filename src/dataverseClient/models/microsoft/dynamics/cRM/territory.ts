import {createAccountFromDiscriminatorValue} from './createAccountFromDiscriminatorValue';
import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createConnectionFromDiscriminatorValue} from './createConnectionFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_actualFromDiscriminatorValue} from './createMsdyn_actualFromDiscriminatorValue';
import {createMsdyn_agreementFromDiscriminatorValue} from './createMsdyn_agreementFromDiscriminatorValue';
import {createMsdyn_postalcodeFromDiscriminatorValue} from './createMsdyn_postalcodeFromDiscriminatorValue';
import {createMsdyn_resourcerequirementFromDiscriminatorValue} from './createMsdyn_resourcerequirementFromDiscriminatorValue';
import {createMsdyn_resourceterritoryFromDiscriminatorValue} from './createMsdyn_resourceterritoryFromDiscriminatorValue';
import {createMsdyn_workorderFromDiscriminatorValue} from './createMsdyn_workorderFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createQuotedetailFromDiscriminatorValue} from './createQuotedetailFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTerritoryFromDiscriminatorValue} from './createTerritoryFromDiscriminatorValue';
import {createTransactioncurrencyFromDiscriminatorValue} from './createTransactioncurrencyFromDiscriminatorValue';
import {Account, Asyncoperation, Bulkdeletefailure, Connection, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Msdyn_actual, Msdyn_agreement, Msdyn_postalcode, Msdyn_resourcerequirement, Msdyn_resourceterritory, Msdyn_workorder, Organization, Principalobjectattributeaccess, Processsession, Quotedetail, Syncerror, Systemuser, Transactioncurrency} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Territory extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __managerid_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private __parentterritoryid_value?: string | undefined;
    private __transactioncurrencyid_value?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _description?: string | undefined;
    private _entityimage?: string | undefined;
    private _entityimage_timestamp?: number | undefined;
    private _entityimage_url?: string | undefined;
    private _entityimageid?: string | undefined;
    private _exchangerate?: number | undefined;
    private _importsequencenumber?: number | undefined;
    private _managerid?: Systemuser | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyn_territory_account_ServiceTerritory?: Account[] | undefined;
    private _msdyn_territory_msdyn_actual_ServiceTerritory?: Msdyn_actual[] | undefined;
    private _msdyn_territory_msdyn_agreement_ServiceTerritory?: Msdyn_agreement[] | undefined;
    private _msdyn_territory_msdyn_postalcode_ServiceTerritory?: Msdyn_postalcode[] | undefined;
    private _msdyn_territory_msdyn_resourcerequirement_Territory?: Msdyn_resourcerequirement[] | undefined;
    private _msdyn_territory_msdyn_resourceterritory_Territory?: Msdyn_resourceterritory[] | undefined;
    private _msdyn_territory_msdyn_workorder_ServiceTerritory?: Msdyn_workorder[] | undefined;
    private _msdyn_territory_quotedetail_ServiceTerritory?: Quotedetail[] | undefined;
    private _name?: string | undefined;
    private _organizationid?: Organization | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _parentterritoryid?: Territory | undefined;
    private _territory_accounts?: Account[] | undefined;
    private _territory_AsyncOperations?: Asyncoperation[] | undefined;
    private _territory_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _territory_connections1?: Connection[] | undefined;
    private _territory_connections2?: Connection[] | undefined;
    private _territory_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _territory_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _territory_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _territory_parent_territory?: Territory[] | undefined;
    private _territory_principalobjectattributeaccess?: Principalobjectattributeaccess[] | undefined;
    private _territory_ProcessSessions?: Processsession[] | undefined;
    private _territory_SyncErrors?: Syncerror[] | undefined;
    private _territory_system_users?: Systemuser[] | undefined;
    private _territoryid?: string | undefined;
    private _timezoneruleversionnumber?: number | undefined;
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
     * Gets the _managerid_value property value. 
     * @returns a string
     */
    public get _managerid_value() {
        return this.__managerid_value;
    };
    /**
     * Sets the _managerid_value property value. 
     * @param value Value to set for the _managerid_value property.
     */
    public set _managerid_value(value: string | undefined) {
        this.__managerid_value = value;
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
     * Gets the _parentterritoryid_value property value. 
     * @returns a string
     */
    public get _parentterritoryid_value() {
        return this.__parentterritoryid_value;
    };
    /**
     * Sets the _parentterritoryid_value property value. 
     * @param value Value to set for the _parentterritoryid_value property.
     */
    public set _parentterritoryid_value(value: string | undefined) {
        this.__parentterritoryid_value = value;
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
     * Instantiates a new territory and sets the default values.
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
     * Gets the description property value. 
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. 
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * Gets the entityimage property value. 
     * @returns a binary
     */
    public get entityimage() {
        return this._entityimage;
    };
    /**
     * Sets the entityimage property value. 
     * @param value Value to set for the entityimage property.
     */
    public set entityimage(value: string | undefined) {
        this._entityimage = value;
    };
    /**
     * Gets the entityimage_timestamp property value. 
     * @returns a int64
     */
    public get entityimage_timestamp() {
        return this._entityimage_timestamp;
    };
    /**
     * Sets the entityimage_timestamp property value. 
     * @param value Value to set for the entityimage_timestamp property.
     */
    public set entityimage_timestamp(value: number | undefined) {
        this._entityimage_timestamp = value;
    };
    /**
     * Gets the entityimage_url property value. 
     * @returns a string
     */
    public get entityimage_url() {
        return this._entityimage_url;
    };
    /**
     * Sets the entityimage_url property value. 
     * @param value Value to set for the entityimage_url property.
     */
    public set entityimage_url(value: string | undefined) {
        this._entityimage_url = value;
    };
    /**
     * Gets the entityimageid property value. 
     * @returns a string
     */
    public get entityimageid() {
        return this._entityimageid;
    };
    /**
     * Sets the entityimageid property value. 
     * @param value Value to set for the entityimageid property.
     */
    public set entityimageid(value: string | undefined) {
        this._entityimageid = value;
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
            "_createdby_value": (o, n) => { (o as unknown as Territory)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Territory)._createdonbehalfby_value = n.getStringValue(); },
            "_managerid_value": (o, n) => { (o as unknown as Territory)._managerid_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Territory)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Territory)._modifiedonbehalfby_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Territory)._organizationid_value = n.getStringValue(); },
            "_parentterritoryid_value": (o, n) => { (o as unknown as Territory)._parentterritoryid_value = n.getStringValue(); },
            "_transactioncurrencyid_value": (o, n) => { (o as unknown as Territory)._transactioncurrencyid_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Territory).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Territory).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Territory).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "description": (o, n) => { (o as unknown as Territory).description = n.getStringValue(); },
            "entityimage": (o, n) => { (o as unknown as Territory).entityimage = n.getStringValue(); },
            "entityimage_timestamp": (o, n) => { (o as unknown as Territory).entityimage_timestamp = n.getNumberValue(); },
            "entityimage_url": (o, n) => { (o as unknown as Territory).entityimage_url = n.getStringValue(); },
            "entityimageid": (o, n) => { (o as unknown as Territory).entityimageid = n.getStringValue(); },
            "exchangerate": (o, n) => { (o as unknown as Territory).exchangerate = n.getNumberValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Territory).importsequencenumber = n.getNumberValue(); },
            "managerid": (o, n) => { (o as unknown as Territory).managerid = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedby": (o, n) => { (o as unknown as Territory).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Territory).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Territory).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_territory_account_ServiceTerritory": (o, n) => { (o as unknown as Territory).msdyn_territory_account_ServiceTerritory = n.getCollectionOfObjectValues<Account>(createAccountFromDiscriminatorValue); },
            "msdyn_territory_msdyn_actual_ServiceTerritory": (o, n) => { (o as unknown as Territory).msdyn_territory_msdyn_actual_ServiceTerritory = n.getCollectionOfObjectValues<Msdyn_actual>(createMsdyn_actualFromDiscriminatorValue); },
            "msdyn_territory_msdyn_agreement_ServiceTerritory": (o, n) => { (o as unknown as Territory).msdyn_territory_msdyn_agreement_ServiceTerritory = n.getCollectionOfObjectValues<Msdyn_agreement>(createMsdyn_agreementFromDiscriminatorValue); },
            "msdyn_territory_msdyn_postalcode_ServiceTerritory": (o, n) => { (o as unknown as Territory).msdyn_territory_msdyn_postalcode_ServiceTerritory = n.getCollectionOfObjectValues<Msdyn_postalcode>(createMsdyn_postalcodeFromDiscriminatorValue); },
            "msdyn_territory_msdyn_resourcerequirement_Territory": (o, n) => { (o as unknown as Territory).msdyn_territory_msdyn_resourcerequirement_Territory = n.getCollectionOfObjectValues<Msdyn_resourcerequirement>(createMsdyn_resourcerequirementFromDiscriminatorValue); },
            "msdyn_territory_msdyn_resourceterritory_Territory": (o, n) => { (o as unknown as Territory).msdyn_territory_msdyn_resourceterritory_Territory = n.getCollectionOfObjectValues<Msdyn_resourceterritory>(createMsdyn_resourceterritoryFromDiscriminatorValue); },
            "msdyn_territory_msdyn_workorder_ServiceTerritory": (o, n) => { (o as unknown as Territory).msdyn_territory_msdyn_workorder_ServiceTerritory = n.getCollectionOfObjectValues<Msdyn_workorder>(createMsdyn_workorderFromDiscriminatorValue); },
            "msdyn_territory_quotedetail_ServiceTerritory": (o, n) => { (o as unknown as Territory).msdyn_territory_quotedetail_ServiceTerritory = n.getCollectionOfObjectValues<Quotedetail>(createQuotedetailFromDiscriminatorValue); },
            "name": (o, n) => { (o as unknown as Territory).name = n.getStringValue(); },
            "organizationid": (o, n) => { (o as unknown as Territory).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Territory).overriddencreatedon = n.getDateValue(); },
            "parentterritoryid": (o, n) => { (o as unknown as Territory).parentterritoryid = n.getObjectValue<Territory>(createTerritoryFromDiscriminatorValue); },
            "territory_accounts": (o, n) => { (o as unknown as Territory).territory_accounts = n.getCollectionOfObjectValues<Account>(createAccountFromDiscriminatorValue); },
            "territory_AsyncOperations": (o, n) => { (o as unknown as Territory).territory_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "territory_BulkDeleteFailures": (o, n) => { (o as unknown as Territory).territory_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "territory_connections1": (o, n) => { (o as unknown as Territory).territory_connections1 = n.getCollectionOfObjectValues<Connection>(createConnectionFromDiscriminatorValue); },
            "territory_connections2": (o, n) => { (o as unknown as Territory).territory_connections2 = n.getCollectionOfObjectValues<Connection>(createConnectionFromDiscriminatorValue); },
            "territory_DuplicateBaseRecord": (o, n) => { (o as unknown as Territory).territory_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "territory_DuplicateMatchingRecord": (o, n) => { (o as unknown as Territory).territory_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "territory_MailboxTrackingFolders": (o, n) => { (o as unknown as Territory).territory_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "territory_parent_territory": (o, n) => { (o as unknown as Territory).territory_parent_territory = n.getCollectionOfObjectValues<Territory>(createTerritoryFromDiscriminatorValue); },
            "territory_principalobjectattributeaccess": (o, n) => { (o as unknown as Territory).territory_principalobjectattributeaccess = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "territory_ProcessSessions": (o, n) => { (o as unknown as Territory).territory_ProcessSessions = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "territory_SyncErrors": (o, n) => { (o as unknown as Territory).territory_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "territory_system_users": (o, n) => { (o as unknown as Territory).territory_system_users = n.getCollectionOfObjectValues<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "territoryid": (o, n) => { (o as unknown as Territory).territoryid = n.getStringValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Territory).timezoneruleversionnumber = n.getNumberValue(); },
            "transactioncurrencyid": (o, n) => { (o as unknown as Territory).transactioncurrencyid = n.getObjectValue<Transactioncurrency>(createTransactioncurrencyFromDiscriminatorValue); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Territory).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Territory).versionnumber = n.getNumberValue(); },
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
     * Gets the managerid property value. 
     * @returns a systemuser
     */
    public get managerid() {
        return this._managerid;
    };
    /**
     * Sets the managerid property value. 
     * @param value Value to set for the managerid property.
     */
    public set managerid(value: Systemuser | undefined) {
        this._managerid = value;
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
     * Gets the msdyn_territory_account_ServiceTerritory property value. 
     * @returns a account
     */
    public get msdyn_territory_account_ServiceTerritory() {
        return this._msdyn_territory_account_ServiceTerritory;
    };
    /**
     * Sets the msdyn_territory_account_ServiceTerritory property value. 
     * @param value Value to set for the msdyn_territory_account_ServiceTerritory property.
     */
    public set msdyn_territory_account_ServiceTerritory(value: Account[] | undefined) {
        this._msdyn_territory_account_ServiceTerritory = value;
    };
    /**
     * Gets the msdyn_territory_msdyn_actual_ServiceTerritory property value. 
     * @returns a msdyn_actual
     */
    public get msdyn_territory_msdyn_actual_ServiceTerritory() {
        return this._msdyn_territory_msdyn_actual_ServiceTerritory;
    };
    /**
     * Sets the msdyn_territory_msdyn_actual_ServiceTerritory property value. 
     * @param value Value to set for the msdyn_territory_msdyn_actual_ServiceTerritory property.
     */
    public set msdyn_territory_msdyn_actual_ServiceTerritory(value: Msdyn_actual[] | undefined) {
        this._msdyn_territory_msdyn_actual_ServiceTerritory = value;
    };
    /**
     * Gets the msdyn_territory_msdyn_agreement_ServiceTerritory property value. 
     * @returns a msdyn_agreement
     */
    public get msdyn_territory_msdyn_agreement_ServiceTerritory() {
        return this._msdyn_territory_msdyn_agreement_ServiceTerritory;
    };
    /**
     * Sets the msdyn_territory_msdyn_agreement_ServiceTerritory property value. 
     * @param value Value to set for the msdyn_territory_msdyn_agreement_ServiceTerritory property.
     */
    public set msdyn_territory_msdyn_agreement_ServiceTerritory(value: Msdyn_agreement[] | undefined) {
        this._msdyn_territory_msdyn_agreement_ServiceTerritory = value;
    };
    /**
     * Gets the msdyn_territory_msdyn_postalcode_ServiceTerritory property value. 
     * @returns a msdyn_postalcode
     */
    public get msdyn_territory_msdyn_postalcode_ServiceTerritory() {
        return this._msdyn_territory_msdyn_postalcode_ServiceTerritory;
    };
    /**
     * Sets the msdyn_territory_msdyn_postalcode_ServiceTerritory property value. 
     * @param value Value to set for the msdyn_territory_msdyn_postalcode_ServiceTerritory property.
     */
    public set msdyn_territory_msdyn_postalcode_ServiceTerritory(value: Msdyn_postalcode[] | undefined) {
        this._msdyn_territory_msdyn_postalcode_ServiceTerritory = value;
    };
    /**
     * Gets the msdyn_territory_msdyn_resourcerequirement_Territory property value. 
     * @returns a msdyn_resourcerequirement
     */
    public get msdyn_territory_msdyn_resourcerequirement_Territory() {
        return this._msdyn_territory_msdyn_resourcerequirement_Territory;
    };
    /**
     * Sets the msdyn_territory_msdyn_resourcerequirement_Territory property value. 
     * @param value Value to set for the msdyn_territory_msdyn_resourcerequirement_Territory property.
     */
    public set msdyn_territory_msdyn_resourcerequirement_Territory(value: Msdyn_resourcerequirement[] | undefined) {
        this._msdyn_territory_msdyn_resourcerequirement_Territory = value;
    };
    /**
     * Gets the msdyn_territory_msdyn_resourceterritory_Territory property value. 
     * @returns a msdyn_resourceterritory
     */
    public get msdyn_territory_msdyn_resourceterritory_Territory() {
        return this._msdyn_territory_msdyn_resourceterritory_Territory;
    };
    /**
     * Sets the msdyn_territory_msdyn_resourceterritory_Territory property value. 
     * @param value Value to set for the msdyn_territory_msdyn_resourceterritory_Territory property.
     */
    public set msdyn_territory_msdyn_resourceterritory_Territory(value: Msdyn_resourceterritory[] | undefined) {
        this._msdyn_territory_msdyn_resourceterritory_Territory = value;
    };
    /**
     * Gets the msdyn_territory_msdyn_workorder_ServiceTerritory property value. 
     * @returns a msdyn_workorder
     */
    public get msdyn_territory_msdyn_workorder_ServiceTerritory() {
        return this._msdyn_territory_msdyn_workorder_ServiceTerritory;
    };
    /**
     * Sets the msdyn_territory_msdyn_workorder_ServiceTerritory property value. 
     * @param value Value to set for the msdyn_territory_msdyn_workorder_ServiceTerritory property.
     */
    public set msdyn_territory_msdyn_workorder_ServiceTerritory(value: Msdyn_workorder[] | undefined) {
        this._msdyn_territory_msdyn_workorder_ServiceTerritory = value;
    };
    /**
     * Gets the msdyn_territory_quotedetail_ServiceTerritory property value. 
     * @returns a quotedetail
     */
    public get msdyn_territory_quotedetail_ServiceTerritory() {
        return this._msdyn_territory_quotedetail_ServiceTerritory;
    };
    /**
     * Sets the msdyn_territory_quotedetail_ServiceTerritory property value. 
     * @param value Value to set for the msdyn_territory_quotedetail_ServiceTerritory property.
     */
    public set msdyn_territory_quotedetail_ServiceTerritory(value: Quotedetail[] | undefined) {
        this._msdyn_territory_quotedetail_ServiceTerritory = value;
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
     * Gets the parentterritoryid property value. 
     * @returns a territory
     */
    public get parentterritoryid() {
        return this._parentterritoryid;
    };
    /**
     * Sets the parentterritoryid property value. 
     * @param value Value to set for the parentterritoryid property.
     */
    public set parentterritoryid(value: Territory | undefined) {
        this._parentterritoryid = value;
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
        writer.writeStringValue("_managerid_value", this._managerid_value);
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_organizationid_value", this._organizationid_value);
        writer.writeStringValue("_parentterritoryid_value", this._parentterritoryid_value);
        writer.writeStringValue("_transactioncurrencyid_value", this._transactioncurrencyid_value);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("entityimage", this.entityimage);
        writer.writeNumberValue("entityimage_timestamp", this.entityimage_timestamp);
        writer.writeStringValue("entityimage_url", this.entityimage_url);
        writer.writeStringValue("entityimageid", this.entityimageid);
        writer.writeNumberValue("exchangerate", this.exchangerate);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("managerid", this.managerid);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeCollectionOfObjectValues<Account>("msdyn_territory_account_ServiceTerritory", this.msdyn_territory_account_ServiceTerritory);
        writer.writeCollectionOfObjectValues<Msdyn_actual>("msdyn_territory_msdyn_actual_ServiceTerritory", this.msdyn_territory_msdyn_actual_ServiceTerritory);
        writer.writeCollectionOfObjectValues<Msdyn_agreement>("msdyn_territory_msdyn_agreement_ServiceTerritory", this.msdyn_territory_msdyn_agreement_ServiceTerritory);
        writer.writeCollectionOfObjectValues<Msdyn_postalcode>("msdyn_territory_msdyn_postalcode_ServiceTerritory", this.msdyn_territory_msdyn_postalcode_ServiceTerritory);
        writer.writeCollectionOfObjectValues<Msdyn_resourcerequirement>("msdyn_territory_msdyn_resourcerequirement_Territory", this.msdyn_territory_msdyn_resourcerequirement_Territory);
        writer.writeCollectionOfObjectValues<Msdyn_resourceterritory>("msdyn_territory_msdyn_resourceterritory_Territory", this.msdyn_territory_msdyn_resourceterritory_Territory);
        writer.writeCollectionOfObjectValues<Msdyn_workorder>("msdyn_territory_msdyn_workorder_ServiceTerritory", this.msdyn_territory_msdyn_workorder_ServiceTerritory);
        writer.writeCollectionOfObjectValues<Quotedetail>("msdyn_territory_quotedetail_ServiceTerritory", this.msdyn_territory_quotedetail_ServiceTerritory);
        writer.writeStringValue("name", this.name);
        writer.writeObjectValue<Organization>("organizationid", this.organizationid);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeObjectValue<Territory>("parentterritoryid", this.parentterritoryid);
        writer.writeCollectionOfObjectValues<Account>("territory_accounts", this.territory_accounts);
        writer.writeCollectionOfObjectValues<Asyncoperation>("territory_AsyncOperations", this.territory_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("territory_BulkDeleteFailures", this.territory_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Connection>("territory_connections1", this.territory_connections1);
        writer.writeCollectionOfObjectValues<Connection>("territory_connections2", this.territory_connections2);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("territory_DuplicateBaseRecord", this.territory_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("territory_DuplicateMatchingRecord", this.territory_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("territory_MailboxTrackingFolders", this.territory_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Territory>("territory_parent_territory", this.territory_parent_territory);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("territory_principalobjectattributeaccess", this.territory_principalobjectattributeaccess);
        writer.writeCollectionOfObjectValues<Processsession>("territory_ProcessSessions", this.territory_ProcessSessions);
        writer.writeCollectionOfObjectValues<Syncerror>("territory_SyncErrors", this.territory_SyncErrors);
        writer.writeCollectionOfObjectValues<Systemuser>("territory_system_users", this.territory_system_users);
        writer.writeStringValue("territoryid", this.territoryid);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeObjectValue<Transactioncurrency>("transactioncurrencyid", this.transactioncurrencyid);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
        writer.writeNumberValue("versionnumber", this.versionnumber);
    };
    /**
     * Gets the territory_accounts property value. 
     * @returns a account
     */
    public get territory_accounts() {
        return this._territory_accounts;
    };
    /**
     * Sets the territory_accounts property value. 
     * @param value Value to set for the territory_accounts property.
     */
    public set territory_accounts(value: Account[] | undefined) {
        this._territory_accounts = value;
    };
    /**
     * Gets the territory_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get territory_AsyncOperations() {
        return this._territory_AsyncOperations;
    };
    /**
     * Sets the territory_AsyncOperations property value. 
     * @param value Value to set for the Territory_AsyncOperations property.
     */
    public set territory_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._territory_AsyncOperations = value;
    };
    /**
     * Gets the territory_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get territory_BulkDeleteFailures() {
        return this._territory_BulkDeleteFailures;
    };
    /**
     * Sets the territory_BulkDeleteFailures property value. 
     * @param value Value to set for the Territory_BulkDeleteFailures property.
     */
    public set territory_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._territory_BulkDeleteFailures = value;
    };
    /**
     * Gets the territory_connections1 property value. 
     * @returns a connection
     */
    public get territory_connections1() {
        return this._territory_connections1;
    };
    /**
     * Sets the territory_connections1 property value. 
     * @param value Value to set for the territory_connections1 property.
     */
    public set territory_connections1(value: Connection[] | undefined) {
        this._territory_connections1 = value;
    };
    /**
     * Gets the territory_connections2 property value. 
     * @returns a connection
     */
    public get territory_connections2() {
        return this._territory_connections2;
    };
    /**
     * Sets the territory_connections2 property value. 
     * @param value Value to set for the territory_connections2 property.
     */
    public set territory_connections2(value: Connection[] | undefined) {
        this._territory_connections2 = value;
    };
    /**
     * Gets the territory_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get territory_DuplicateBaseRecord() {
        return this._territory_DuplicateBaseRecord;
    };
    /**
     * Sets the territory_DuplicateBaseRecord property value. 
     * @param value Value to set for the Territory_DuplicateBaseRecord property.
     */
    public set territory_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._territory_DuplicateBaseRecord = value;
    };
    /**
     * Gets the territory_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get territory_DuplicateMatchingRecord() {
        return this._territory_DuplicateMatchingRecord;
    };
    /**
     * Sets the territory_DuplicateMatchingRecord property value. 
     * @param value Value to set for the Territory_DuplicateMatchingRecord property.
     */
    public set territory_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._territory_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the territory_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get territory_MailboxTrackingFolders() {
        return this._territory_MailboxTrackingFolders;
    };
    /**
     * Sets the territory_MailboxTrackingFolders property value. 
     * @param value Value to set for the territory_MailboxTrackingFolders property.
     */
    public set territory_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._territory_MailboxTrackingFolders = value;
    };
    /**
     * Gets the territory_parent_territory property value. 
     * @returns a territory
     */
    public get territory_parent_territory() {
        return this._territory_parent_territory;
    };
    /**
     * Sets the territory_parent_territory property value. 
     * @param value Value to set for the territory_parent_territory property.
     */
    public set territory_parent_territory(value: Territory[] | undefined) {
        this._territory_parent_territory = value;
    };
    /**
     * Gets the territory_principalobjectattributeaccess property value. 
     * @returns a principalobjectattributeaccess
     */
    public get territory_principalobjectattributeaccess() {
        return this._territory_principalobjectattributeaccess;
    };
    /**
     * Sets the territory_principalobjectattributeaccess property value. 
     * @param value Value to set for the territory_principalobjectattributeaccess property.
     */
    public set territory_principalobjectattributeaccess(value: Principalobjectattributeaccess[] | undefined) {
        this._territory_principalobjectattributeaccess = value;
    };
    /**
     * Gets the territory_ProcessSessions property value. 
     * @returns a processsession
     */
    public get territory_ProcessSessions() {
        return this._territory_ProcessSessions;
    };
    /**
     * Sets the territory_ProcessSessions property value. 
     * @param value Value to set for the Territory_ProcessSessions property.
     */
    public set territory_ProcessSessions(value: Processsession[] | undefined) {
        this._territory_ProcessSessions = value;
    };
    /**
     * Gets the territory_SyncErrors property value. 
     * @returns a syncerror
     */
    public get territory_SyncErrors() {
        return this._territory_SyncErrors;
    };
    /**
     * Sets the territory_SyncErrors property value. 
     * @param value Value to set for the Territory_SyncErrors property.
     */
    public set territory_SyncErrors(value: Syncerror[] | undefined) {
        this._territory_SyncErrors = value;
    };
    /**
     * Gets the territory_system_users property value. 
     * @returns a systemuser
     */
    public get territory_system_users() {
        return this._territory_system_users;
    };
    /**
     * Sets the territory_system_users property value. 
     * @param value Value to set for the territory_system_users property.
     */
    public set territory_system_users(value: Systemuser[] | undefined) {
        this._territory_system_users = value;
    };
    /**
     * Gets the territoryid property value. 
     * @returns a string
     */
    public get territoryid() {
        return this._territoryid;
    };
    /**
     * Sets the territoryid property value. 
     * @param value Value to set for the territoryid property.
     */
    public set territoryid(value: string | undefined) {
        this._territoryid = value;
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
