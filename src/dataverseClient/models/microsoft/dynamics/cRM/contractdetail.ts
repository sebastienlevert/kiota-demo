import {createAccountFromDiscriminatorValue} from './createAccountFromDiscriminatorValue';
import {createAnnotationFromDiscriminatorValue} from './createAnnotationFromDiscriminatorValue';
import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createContactFromDiscriminatorValue} from './createContactFromDiscriminatorValue';
import {createContractFromDiscriminatorValue} from './createContractFromDiscriminatorValue';
import {createCustomeraddressFromDiscriminatorValue} from './createCustomeraddressFromDiscriminatorValue';
import {createIncidentFromDiscriminatorValue} from './createIncidentFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createProductFromDiscriminatorValue} from './createProductFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {createTransactioncurrencyFromDiscriminatorValue} from './createTransactioncurrencyFromDiscriminatorValue';
import {createUomFromDiscriminatorValue} from './createUomFromDiscriminatorValue';
import {createUomscheduleFromDiscriminatorValue} from './createUomscheduleFromDiscriminatorValue';
import {Account, Annotation, Asyncoperation, Bulkdeletefailure, Contact, Contract, Crmbaseentity, Customeraddress, Incident, Mailboxtrackingfolder, Principalobjectattributeaccess, Processsession, Product, Syncerror, Systemuser, Team, Transactioncurrency, Uom, Uomschedule} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Contractdetail extends Crmbaseentity implements Parsable {
    private __accountid_value?: string | undefined;
    private __contactid_value?: string | undefined;
    private __contractid_value?: string | undefined;
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __customerid_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private __productid_value?: string | undefined;
    private __serviceaddress_value?: string | undefined;
    private __transactioncurrencyid_value?: string | undefined;
    private __uomid_value?: string | undefined;
    private __uomscheduleid_value?: string | undefined;
    private _activeon?: Date | undefined;
    private _allotmentsoverage?: number | undefined;
    private _allotmentsremaining?: number | undefined;
    private _allotmentsused?: number | undefined;
    private _contract_detail_cases?: Incident[] | undefined;
    private _contractDetail_Annotation?: Annotation[] | undefined;
    private _contractDetail_AsyncOperations?: Asyncoperation[] | undefined;
    private _contractDetail_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _contractdetail_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _contractdetail_principalobjectattributeaccess?: Principalobjectattributeaccess[] | undefined;
    private _contractDetail_ProcessSessions?: Processsession[] | undefined;
    private _contractDetail_SyncErrors?: Syncerror[] | undefined;
    private _contractdetailid?: string | undefined;
    private _contractid?: Contract | undefined;
    private _contractstatecode?: number | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _customerid_account?: Account | undefined;
    private _customerid_contact?: Contact | undefined;
    private _discount?: number | undefined;
    private _discount_base?: number | undefined;
    private _discountpercentage?: number | undefined;
    private _effectivitycalendar?: string | undefined;
    private _exchangerate?: number | undefined;
    private _expireson?: Date | undefined;
    private _importsequencenumber?: number | undefined;
    private _initialquantity?: number | undefined;
    private _lineitemorder?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _net?: number | undefined;
    private _net_base?: number | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _owningteam?: Team | undefined;
    private _owninguser?: Systemuser | undefined;
    private _price?: number | undefined;
    private _price_base?: number | undefined;
    private _productid?: Product | undefined;
    private _productserialnumber?: string | undefined;
    private _rate?: number | undefined;
    private _rate_base?: number | undefined;
    private _serviceaddress?: Customeraddress | undefined;
    private _servicecontractunitscode?: number | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _title?: string | undefined;
    private _totalallotments?: number | undefined;
    private _transactioncurrencyid?: Transactioncurrency | undefined;
    private _uomid?: Uom | undefined;
    private _uomscheduleid?: Uomschedule | undefined;
    private _utcconversiontimezonecode?: number | undefined;
    private _versionnumber?: number | undefined;
    /**
     * Gets the _accountid_value property value. 
     * @returns a string
     */
    public get _accountid_value() {
        return this.__accountid_value;
    };
    /**
     * Sets the _accountid_value property value. 
     * @param value Value to set for the _accountid_value property.
     */
    public set _accountid_value(value: string | undefined) {
        this.__accountid_value = value;
    };
    /**
     * Gets the _contactid_value property value. 
     * @returns a string
     */
    public get _contactid_value() {
        return this.__contactid_value;
    };
    /**
     * Sets the _contactid_value property value. 
     * @param value Value to set for the _contactid_value property.
     */
    public set _contactid_value(value: string | undefined) {
        this.__contactid_value = value;
    };
    /**
     * Gets the _contractid_value property value. 
     * @returns a string
     */
    public get _contractid_value() {
        return this.__contractid_value;
    };
    /**
     * Sets the _contractid_value property value. 
     * @param value Value to set for the _contractid_value property.
     */
    public set _contractid_value(value: string | undefined) {
        this.__contractid_value = value;
    };
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
     * Gets the _customerid_value property value. 
     * @returns a string
     */
    public get _customerid_value() {
        return this.__customerid_value;
    };
    /**
     * Sets the _customerid_value property value. 
     * @param value Value to set for the _customerid_value property.
     */
    public set _customerid_value(value: string | undefined) {
        this.__customerid_value = value;
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
     * Gets the _productid_value property value. 
     * @returns a string
     */
    public get _productid_value() {
        return this.__productid_value;
    };
    /**
     * Sets the _productid_value property value. 
     * @param value Value to set for the _productid_value property.
     */
    public set _productid_value(value: string | undefined) {
        this.__productid_value = value;
    };
    /**
     * Gets the _serviceaddress_value property value. 
     * @returns a string
     */
    public get _serviceaddress_value() {
        return this.__serviceaddress_value;
    };
    /**
     * Sets the _serviceaddress_value property value. 
     * @param value Value to set for the _serviceaddress_value property.
     */
    public set _serviceaddress_value(value: string | undefined) {
        this.__serviceaddress_value = value;
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
     * Gets the _uomid_value property value. 
     * @returns a string
     */
    public get _uomid_value() {
        return this.__uomid_value;
    };
    /**
     * Sets the _uomid_value property value. 
     * @param value Value to set for the _uomid_value property.
     */
    public set _uomid_value(value: string | undefined) {
        this.__uomid_value = value;
    };
    /**
     * Gets the _uomscheduleid_value property value. 
     * @returns a string
     */
    public get _uomscheduleid_value() {
        return this.__uomscheduleid_value;
    };
    /**
     * Sets the _uomscheduleid_value property value. 
     * @param value Value to set for the _uomscheduleid_value property.
     */
    public set _uomscheduleid_value(value: string | undefined) {
        this.__uomscheduleid_value = value;
    };
    /**
     * Gets the activeon property value. 
     * @returns a Date
     */
    public get activeon() {
        return this._activeon;
    };
    /**
     * Sets the activeon property value. 
     * @param value Value to set for the activeon property.
     */
    public set activeon(value: Date | undefined) {
        this._activeon = value;
    };
    /**
     * Gets the allotmentsoverage property value. 
     * @returns a integer
     */
    public get allotmentsoverage() {
        return this._allotmentsoverage;
    };
    /**
     * Sets the allotmentsoverage property value. 
     * @param value Value to set for the allotmentsoverage property.
     */
    public set allotmentsoverage(value: number | undefined) {
        this._allotmentsoverage = value;
    };
    /**
     * Gets the allotmentsremaining property value. 
     * @returns a integer
     */
    public get allotmentsremaining() {
        return this._allotmentsremaining;
    };
    /**
     * Sets the allotmentsremaining property value. 
     * @param value Value to set for the allotmentsremaining property.
     */
    public set allotmentsremaining(value: number | undefined) {
        this._allotmentsremaining = value;
    };
    /**
     * Gets the allotmentsused property value. 
     * @returns a integer
     */
    public get allotmentsused() {
        return this._allotmentsused;
    };
    /**
     * Sets the allotmentsused property value. 
     * @param value Value to set for the allotmentsused property.
     */
    public set allotmentsused(value: number | undefined) {
        this._allotmentsused = value;
    };
    /**
     * Instantiates a new contractdetail and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the contract_detail_cases property value. 
     * @returns a incident
     */
    public get contract_detail_cases() {
        return this._contract_detail_cases;
    };
    /**
     * Sets the contract_detail_cases property value. 
     * @param value Value to set for the contract_detail_cases property.
     */
    public set contract_detail_cases(value: Incident[] | undefined) {
        this._contract_detail_cases = value;
    };
    /**
     * Gets the contractDetail_Annotation property value. 
     * @returns a annotation
     */
    public get contractDetail_Annotation() {
        return this._contractDetail_Annotation;
    };
    /**
     * Sets the contractDetail_Annotation property value. 
     * @param value Value to set for the ContractDetail_Annotation property.
     */
    public set contractDetail_Annotation(value: Annotation[] | undefined) {
        this._contractDetail_Annotation = value;
    };
    /**
     * Gets the contractDetail_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get contractDetail_AsyncOperations() {
        return this._contractDetail_AsyncOperations;
    };
    /**
     * Sets the contractDetail_AsyncOperations property value. 
     * @param value Value to set for the ContractDetail_AsyncOperations property.
     */
    public set contractDetail_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._contractDetail_AsyncOperations = value;
    };
    /**
     * Gets the contractDetail_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get contractDetail_BulkDeleteFailures() {
        return this._contractDetail_BulkDeleteFailures;
    };
    /**
     * Sets the contractDetail_BulkDeleteFailures property value. 
     * @param value Value to set for the ContractDetail_BulkDeleteFailures property.
     */
    public set contractDetail_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._contractDetail_BulkDeleteFailures = value;
    };
    /**
     * Gets the contractdetail_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get contractdetail_MailboxTrackingFolders() {
        return this._contractdetail_MailboxTrackingFolders;
    };
    /**
     * Sets the contractdetail_MailboxTrackingFolders property value. 
     * @param value Value to set for the contractdetail_MailboxTrackingFolders property.
     */
    public set contractdetail_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._contractdetail_MailboxTrackingFolders = value;
    };
    /**
     * Gets the contractdetail_principalobjectattributeaccess property value. 
     * @returns a principalobjectattributeaccess
     */
    public get contractdetail_principalobjectattributeaccess() {
        return this._contractdetail_principalobjectattributeaccess;
    };
    /**
     * Sets the contractdetail_principalobjectattributeaccess property value. 
     * @param value Value to set for the contractdetail_principalobjectattributeaccess property.
     */
    public set contractdetail_principalobjectattributeaccess(value: Principalobjectattributeaccess[] | undefined) {
        this._contractdetail_principalobjectattributeaccess = value;
    };
    /**
     * Gets the contractDetail_ProcessSessions property value. 
     * @returns a processsession
     */
    public get contractDetail_ProcessSessions() {
        return this._contractDetail_ProcessSessions;
    };
    /**
     * Sets the contractDetail_ProcessSessions property value. 
     * @param value Value to set for the ContractDetail_ProcessSessions property.
     */
    public set contractDetail_ProcessSessions(value: Processsession[] | undefined) {
        this._contractDetail_ProcessSessions = value;
    };
    /**
     * Gets the contractDetail_SyncErrors property value. 
     * @returns a syncerror
     */
    public get contractDetail_SyncErrors() {
        return this._contractDetail_SyncErrors;
    };
    /**
     * Sets the contractDetail_SyncErrors property value. 
     * @param value Value to set for the ContractDetail_SyncErrors property.
     */
    public set contractDetail_SyncErrors(value: Syncerror[] | undefined) {
        this._contractDetail_SyncErrors = value;
    };
    /**
     * Gets the contractdetailid property value. 
     * @returns a string
     */
    public get contractdetailid() {
        return this._contractdetailid;
    };
    /**
     * Sets the contractdetailid property value. 
     * @param value Value to set for the contractdetailid property.
     */
    public set contractdetailid(value: string | undefined) {
        this._contractdetailid = value;
    };
    /**
     * Gets the contractid property value. 
     * @returns a contract
     */
    public get contractid() {
        return this._contractid;
    };
    /**
     * Sets the contractid property value. 
     * @param value Value to set for the contractid property.
     */
    public set contractid(value: Contract | undefined) {
        this._contractid = value;
    };
    /**
     * Gets the contractstatecode property value. 
     * @returns a integer
     */
    public get contractstatecode() {
        return this._contractstatecode;
    };
    /**
     * Sets the contractstatecode property value. 
     * @param value Value to set for the contractstatecode property.
     */
    public set contractstatecode(value: number | undefined) {
        this._contractstatecode = value;
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
     * Gets the customerid_account property value. 
     * @returns a account
     */
    public get customerid_account() {
        return this._customerid_account;
    };
    /**
     * Sets the customerid_account property value. 
     * @param value Value to set for the customerid_account property.
     */
    public set customerid_account(value: Account | undefined) {
        this._customerid_account = value;
    };
    /**
     * Gets the customerid_contact property value. 
     * @returns a contact
     */
    public get customerid_contact() {
        return this._customerid_contact;
    };
    /**
     * Sets the customerid_contact property value. 
     * @param value Value to set for the customerid_contact property.
     */
    public set customerid_contact(value: Contact | undefined) {
        this._customerid_contact = value;
    };
    /**
     * Gets the discount property value. 
     * @returns a int64
     */
    public get discount() {
        return this._discount;
    };
    /**
     * Sets the discount property value. 
     * @param value Value to set for the discount property.
     */
    public set discount(value: number | undefined) {
        this._discount = value;
    };
    /**
     * Gets the discount_base property value. 
     * @returns a int64
     */
    public get discount_base() {
        return this._discount_base;
    };
    /**
     * Sets the discount_base property value. 
     * @param value Value to set for the discount_base property.
     */
    public set discount_base(value: number | undefined) {
        this._discount_base = value;
    };
    /**
     * Gets the discountpercentage property value. 
     * @returns a int64
     */
    public get discountpercentage() {
        return this._discountpercentage;
    };
    /**
     * Sets the discountpercentage property value. 
     * @param value Value to set for the discountpercentage property.
     */
    public set discountpercentage(value: number | undefined) {
        this._discountpercentage = value;
    };
    /**
     * Gets the effectivitycalendar property value. 
     * @returns a string
     */
    public get effectivitycalendar() {
        return this._effectivitycalendar;
    };
    /**
     * Sets the effectivitycalendar property value. 
     * @param value Value to set for the effectivitycalendar property.
     */
    public set effectivitycalendar(value: string | undefined) {
        this._effectivitycalendar = value;
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
     * Gets the expireson property value. 
     * @returns a Date
     */
    public get expireson() {
        return this._expireson;
    };
    /**
     * Sets the expireson property value. 
     * @param value Value to set for the expireson property.
     */
    public set expireson(value: Date | undefined) {
        this._expireson = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_accountid_value": (o, n) => { (o as unknown as Contractdetail)._accountid_value = n.getStringValue(); },
            "_contactid_value": (o, n) => { (o as unknown as Contractdetail)._contactid_value = n.getStringValue(); },
            "_contractid_value": (o, n) => { (o as unknown as Contractdetail)._contractid_value = n.getStringValue(); },
            "_createdby_value": (o, n) => { (o as unknown as Contractdetail)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Contractdetail)._createdonbehalfby_value = n.getStringValue(); },
            "_customerid_value": (o, n) => { (o as unknown as Contractdetail)._customerid_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Contractdetail)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Contractdetail)._modifiedonbehalfby_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Contractdetail)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Contractdetail)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Contractdetail)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Contractdetail)._owninguser_value = n.getStringValue(); },
            "_productid_value": (o, n) => { (o as unknown as Contractdetail)._productid_value = n.getStringValue(); },
            "_serviceaddress_value": (o, n) => { (o as unknown as Contractdetail)._serviceaddress_value = n.getStringValue(); },
            "_transactioncurrencyid_value": (o, n) => { (o as unknown as Contractdetail)._transactioncurrencyid_value = n.getStringValue(); },
            "_uomid_value": (o, n) => { (o as unknown as Contractdetail)._uomid_value = n.getStringValue(); },
            "_uomscheduleid_value": (o, n) => { (o as unknown as Contractdetail)._uomscheduleid_value = n.getStringValue(); },
            "activeon": (o, n) => { (o as unknown as Contractdetail).activeon = n.getDateValue(); },
            "allotmentsoverage": (o, n) => { (o as unknown as Contractdetail).allotmentsoverage = n.getNumberValue(); },
            "allotmentsremaining": (o, n) => { (o as unknown as Contractdetail).allotmentsremaining = n.getNumberValue(); },
            "allotmentsused": (o, n) => { (o as unknown as Contractdetail).allotmentsused = n.getNumberValue(); },
            "contract_detail_cases": (o, n) => { (o as unknown as Contractdetail).contract_detail_cases = n.getCollectionOfObjectValues<Incident>(createIncidentFromDiscriminatorValue); },
            "contractDetail_Annotation": (o, n) => { (o as unknown as Contractdetail).contractDetail_Annotation = n.getCollectionOfObjectValues<Annotation>(createAnnotationFromDiscriminatorValue); },
            "contractDetail_AsyncOperations": (o, n) => { (o as unknown as Contractdetail).contractDetail_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "contractDetail_BulkDeleteFailures": (o, n) => { (o as unknown as Contractdetail).contractDetail_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "contractdetail_MailboxTrackingFolders": (o, n) => { (o as unknown as Contractdetail).contractdetail_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "contractdetail_principalobjectattributeaccess": (o, n) => { (o as unknown as Contractdetail).contractdetail_principalobjectattributeaccess = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "contractDetail_ProcessSessions": (o, n) => { (o as unknown as Contractdetail).contractDetail_ProcessSessions = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "contractDetail_SyncErrors": (o, n) => { (o as unknown as Contractdetail).contractDetail_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "contractdetailid": (o, n) => { (o as unknown as Contractdetail).contractdetailid = n.getStringValue(); },
            "contractid": (o, n) => { (o as unknown as Contractdetail).contractid = n.getObjectValue<Contract>(createContractFromDiscriminatorValue); },
            "contractstatecode": (o, n) => { (o as unknown as Contractdetail).contractstatecode = n.getNumberValue(); },
            "createdby": (o, n) => { (o as unknown as Contractdetail).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Contractdetail).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Contractdetail).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "customerid_account": (o, n) => { (o as unknown as Contractdetail).customerid_account = n.getObjectValue<Account>(createAccountFromDiscriminatorValue); },
            "customerid_contact": (o, n) => { (o as unknown as Contractdetail).customerid_contact = n.getObjectValue<Contact>(createContactFromDiscriminatorValue); },
            "discount": (o, n) => { (o as unknown as Contractdetail).discount = n.getNumberValue(); },
            "discount_base": (o, n) => { (o as unknown as Contractdetail).discount_base = n.getNumberValue(); },
            "discountpercentage": (o, n) => { (o as unknown as Contractdetail).discountpercentage = n.getNumberValue(); },
            "effectivitycalendar": (o, n) => { (o as unknown as Contractdetail).effectivitycalendar = n.getStringValue(); },
            "exchangerate": (o, n) => { (o as unknown as Contractdetail).exchangerate = n.getNumberValue(); },
            "expireson": (o, n) => { (o as unknown as Contractdetail).expireson = n.getDateValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Contractdetail).importsequencenumber = n.getNumberValue(); },
            "initialquantity": (o, n) => { (o as unknown as Contractdetail).initialquantity = n.getNumberValue(); },
            "lineitemorder": (o, n) => { (o as unknown as Contractdetail).lineitemorder = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Contractdetail).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Contractdetail).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Contractdetail).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "net": (o, n) => { (o as unknown as Contractdetail).net = n.getNumberValue(); },
            "net_base": (o, n) => { (o as unknown as Contractdetail).net_base = n.getNumberValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Contractdetail).overriddencreatedon = n.getDateValue(); },
            "owningteam": (o, n) => { (o as unknown as Contractdetail).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Contractdetail).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "price": (o, n) => { (o as unknown as Contractdetail).price = n.getNumberValue(); },
            "price_base": (o, n) => { (o as unknown as Contractdetail).price_base = n.getNumberValue(); },
            "productid": (o, n) => { (o as unknown as Contractdetail).productid = n.getObjectValue<Product>(createProductFromDiscriminatorValue); },
            "productserialnumber": (o, n) => { (o as unknown as Contractdetail).productserialnumber = n.getStringValue(); },
            "rate": (o, n) => { (o as unknown as Contractdetail).rate = n.getNumberValue(); },
            "rate_base": (o, n) => { (o as unknown as Contractdetail).rate_base = n.getNumberValue(); },
            "serviceaddress": (o, n) => { (o as unknown as Contractdetail).serviceaddress = n.getObjectValue<Customeraddress>(createCustomeraddressFromDiscriminatorValue); },
            "servicecontractunitscode": (o, n) => { (o as unknown as Contractdetail).servicecontractunitscode = n.getNumberValue(); },
            "statecode": (o, n) => { (o as unknown as Contractdetail).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Contractdetail).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Contractdetail).timezoneruleversionnumber = n.getNumberValue(); },
            "title": (o, n) => { (o as unknown as Contractdetail).title = n.getStringValue(); },
            "totalallotments": (o, n) => { (o as unknown as Contractdetail).totalallotments = n.getNumberValue(); },
            "transactioncurrencyid": (o, n) => { (o as unknown as Contractdetail).transactioncurrencyid = n.getObjectValue<Transactioncurrency>(createTransactioncurrencyFromDiscriminatorValue); },
            "uomid": (o, n) => { (o as unknown as Contractdetail).uomid = n.getObjectValue<Uom>(createUomFromDiscriminatorValue); },
            "uomscheduleid": (o, n) => { (o as unknown as Contractdetail).uomscheduleid = n.getObjectValue<Uomschedule>(createUomscheduleFromDiscriminatorValue); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Contractdetail).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Contractdetail).versionnumber = n.getNumberValue(); },
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
     * Gets the initialquantity property value. 
     * @returns a integer
     */
    public get initialquantity() {
        return this._initialquantity;
    };
    /**
     * Sets the initialquantity property value. 
     * @param value Value to set for the initialquantity property.
     */
    public set initialquantity(value: number | undefined) {
        this._initialquantity = value;
    };
    /**
     * Gets the lineitemorder property value. 
     * @returns a integer
     */
    public get lineitemorder() {
        return this._lineitemorder;
    };
    /**
     * Sets the lineitemorder property value. 
     * @param value Value to set for the lineitemorder property.
     */
    public set lineitemorder(value: number | undefined) {
        this._lineitemorder = value;
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
     * Gets the net property value. 
     * @returns a int64
     */
    public get net() {
        return this._net;
    };
    /**
     * Sets the net property value. 
     * @param value Value to set for the net property.
     */
    public set net(value: number | undefined) {
        this._net = value;
    };
    /**
     * Gets the net_base property value. 
     * @returns a int64
     */
    public get net_base() {
        return this._net_base;
    };
    /**
     * Sets the net_base property value. 
     * @param value Value to set for the net_base property.
     */
    public set net_base(value: number | undefined) {
        this._net_base = value;
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
     * Gets the price property value. 
     * @returns a int64
     */
    public get price() {
        return this._price;
    };
    /**
     * Sets the price property value. 
     * @param value Value to set for the price property.
     */
    public set price(value: number | undefined) {
        this._price = value;
    };
    /**
     * Gets the price_base property value. 
     * @returns a int64
     */
    public get price_base() {
        return this._price_base;
    };
    /**
     * Sets the price_base property value. 
     * @param value Value to set for the price_base property.
     */
    public set price_base(value: number | undefined) {
        this._price_base = value;
    };
    /**
     * Gets the productid property value. 
     * @returns a product
     */
    public get productid() {
        return this._productid;
    };
    /**
     * Sets the productid property value. 
     * @param value Value to set for the productid property.
     */
    public set productid(value: Product | undefined) {
        this._productid = value;
    };
    /**
     * Gets the productserialnumber property value. 
     * @returns a string
     */
    public get productserialnumber() {
        return this._productserialnumber;
    };
    /**
     * Sets the productserialnumber property value. 
     * @param value Value to set for the productserialnumber property.
     */
    public set productserialnumber(value: string | undefined) {
        this._productserialnumber = value;
    };
    /**
     * Gets the rate property value. 
     * @returns a int64
     */
    public get rate() {
        return this._rate;
    };
    /**
     * Sets the rate property value. 
     * @param value Value to set for the rate property.
     */
    public set rate(value: number | undefined) {
        this._rate = value;
    };
    /**
     * Gets the rate_base property value. 
     * @returns a int64
     */
    public get rate_base() {
        return this._rate_base;
    };
    /**
     * Sets the rate_base property value. 
     * @param value Value to set for the rate_base property.
     */
    public set rate_base(value: number | undefined) {
        this._rate_base = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("_accountid_value", this._accountid_value);
        writer.writeStringValue("_contactid_value", this._contactid_value);
        writer.writeStringValue("_contractid_value", this._contractid_value);
        writer.writeStringValue("_createdby_value", this._createdby_value);
        writer.writeStringValue("_createdonbehalfby_value", this._createdonbehalfby_value);
        writer.writeStringValue("_customerid_value", this._customerid_value);
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_owningteam_value", this._owningteam_value);
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeStringValue("_productid_value", this._productid_value);
        writer.writeStringValue("_serviceaddress_value", this._serviceaddress_value);
        writer.writeStringValue("_transactioncurrencyid_value", this._transactioncurrencyid_value);
        writer.writeStringValue("_uomid_value", this._uomid_value);
        writer.writeStringValue("_uomscheduleid_value", this._uomscheduleid_value);
        writer.writeDateValue("activeon", this.activeon);
        writer.writeNumberValue("allotmentsoverage", this.allotmentsoverage);
        writer.writeNumberValue("allotmentsremaining", this.allotmentsremaining);
        writer.writeNumberValue("allotmentsused", this.allotmentsused);
        writer.writeCollectionOfObjectValues<Incident>("contract_detail_cases", this.contract_detail_cases);
        writer.writeCollectionOfObjectValues<Annotation>("contractDetail_Annotation", this.contractDetail_Annotation);
        writer.writeCollectionOfObjectValues<Asyncoperation>("contractDetail_AsyncOperations", this.contractDetail_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("contractDetail_BulkDeleteFailures", this.contractDetail_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("contractdetail_MailboxTrackingFolders", this.contractdetail_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("contractdetail_principalobjectattributeaccess", this.contractdetail_principalobjectattributeaccess);
        writer.writeCollectionOfObjectValues<Processsession>("contractDetail_ProcessSessions", this.contractDetail_ProcessSessions);
        writer.writeCollectionOfObjectValues<Syncerror>("contractDetail_SyncErrors", this.contractDetail_SyncErrors);
        writer.writeStringValue("contractdetailid", this.contractdetailid);
        writer.writeObjectValue<Contract>("contractid", this.contractid);
        writer.writeNumberValue("contractstatecode", this.contractstatecode);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeObjectValue<Account>("customerid_account", this.customerid_account);
        writer.writeObjectValue<Contact>("customerid_contact", this.customerid_contact);
        writer.writeNumberValue("discount", this.discount);
        writer.writeNumberValue("discount_base", this.discount_base);
        writer.writeNumberValue("discountpercentage", this.discountpercentage);
        writer.writeStringValue("effectivitycalendar", this.effectivitycalendar);
        writer.writeNumberValue("exchangerate", this.exchangerate);
        writer.writeDateValue("expireson", this.expireson);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeNumberValue("initialquantity", this.initialquantity);
        writer.writeNumberValue("lineitemorder", this.lineitemorder);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeNumberValue("net", this.net);
        writer.writeNumberValue("net_base", this.net_base);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeObjectValue<Team>("owningteam", this.owningteam);
        writer.writeObjectValue<Systemuser>("owninguser", this.owninguser);
        writer.writeNumberValue("price", this.price);
        writer.writeNumberValue("price_base", this.price_base);
        writer.writeObjectValue<Product>("productid", this.productid);
        writer.writeStringValue("productserialnumber", this.productserialnumber);
        writer.writeNumberValue("rate", this.rate);
        writer.writeNumberValue("rate_base", this.rate_base);
        writer.writeObjectValue<Customeraddress>("serviceaddress", this.serviceaddress);
        writer.writeNumberValue("servicecontractunitscode", this.servicecontractunitscode);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeStringValue("title", this.title);
        writer.writeNumberValue("totalallotments", this.totalallotments);
        writer.writeObjectValue<Transactioncurrency>("transactioncurrencyid", this.transactioncurrencyid);
        writer.writeObjectValue<Uom>("uomid", this.uomid);
        writer.writeObjectValue<Uomschedule>("uomscheduleid", this.uomscheduleid);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
        writer.writeNumberValue("versionnumber", this.versionnumber);
    };
    /**
     * Gets the serviceaddress property value. 
     * @returns a customeraddress
     */
    public get serviceaddress() {
        return this._serviceaddress;
    };
    /**
     * Sets the serviceaddress property value. 
     * @param value Value to set for the serviceaddress property.
     */
    public set serviceaddress(value: Customeraddress | undefined) {
        this._serviceaddress = value;
    };
    /**
     * Gets the servicecontractunitscode property value. 
     * @returns a integer
     */
    public get servicecontractunitscode() {
        return this._servicecontractunitscode;
    };
    /**
     * Sets the servicecontractunitscode property value. 
     * @param value Value to set for the servicecontractunitscode property.
     */
    public set servicecontractunitscode(value: number | undefined) {
        this._servicecontractunitscode = value;
    };
    /**
     * Gets the statecode property value. 
     * @returns a integer
     */
    public get statecode() {
        return this._statecode;
    };
    /**
     * Sets the statecode property value. 
     * @param value Value to set for the statecode property.
     */
    public set statecode(value: number | undefined) {
        this._statecode = value;
    };
    /**
     * Gets the statuscode property value. 
     * @returns a integer
     */
    public get statuscode() {
        return this._statuscode;
    };
    /**
     * Sets the statuscode property value. 
     * @param value Value to set for the statuscode property.
     */
    public set statuscode(value: number | undefined) {
        this._statuscode = value;
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
     * Gets the title property value. 
     * @returns a string
     */
    public get title() {
        return this._title;
    };
    /**
     * Sets the title property value. 
     * @param value Value to set for the title property.
     */
    public set title(value: string | undefined) {
        this._title = value;
    };
    /**
     * Gets the totalallotments property value. 
     * @returns a integer
     */
    public get totalallotments() {
        return this._totalallotments;
    };
    /**
     * Sets the totalallotments property value. 
     * @param value Value to set for the totalallotments property.
     */
    public set totalallotments(value: number | undefined) {
        this._totalallotments = value;
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
     * Gets the uomid property value. 
     * @returns a uom
     */
    public get uomid() {
        return this._uomid;
    };
    /**
     * Sets the uomid property value. 
     * @param value Value to set for the uomid property.
     */
    public set uomid(value: Uom | undefined) {
        this._uomid = value;
    };
    /**
     * Gets the uomscheduleid property value. 
     * @returns a uomschedule
     */
    public get uomscheduleid() {
        return this._uomscheduleid;
    };
    /**
     * Sets the uomscheduleid property value. 
     * @param value Value to set for the uomscheduleid property.
     */
    public set uomscheduleid(value: Uomschedule | undefined) {
        this._uomscheduleid = value;
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
